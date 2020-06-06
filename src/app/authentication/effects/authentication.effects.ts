import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap, catchError, switchMap } from 'rxjs/operators';
import * as AuthenticationAction from '../actions/authentication.actions';
import { of } from 'rxjs';
import { AuthenticationService } from '../authentication.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationEffects {
  public constructor(
    private readonly actions$: Actions,
    private readonly service: AuthenticationService,
    private readonly notificationService: NzNotificationService,
    private router: Router
  ) {}

  public signUp$ = createEffect(() => this.actions$.pipe(
    ofType(AuthenticationAction.SIGN_UP_ACTION),
    exhaustMap(({payload}) => {
      return this.service.signUp(payload).pipe(
          map((data: any) => {
            this.router.navigate(['verify'], {
              queryParams: {
                verifyId: data.verifyId,
                hashKeyPair: data.hashKeyPair
              }
            });
            return new AuthenticationAction.SignUpSuccessAction(data);
          }),
          catchError((error) => {
            this.notificationService.error('오류', '가입 중 오류가 발생했습니다.');
            return of(new AuthenticationAction.SignUpFailedAction(error));
          })
        );
    }),
  ));

  public createToken$ = createEffect(() => this.actions$.pipe(
    ofType(AuthenticationAction.CREATE_TOKEN_ACTION),
    exhaustMap(({payload}) => {
      return this.service.createToken(payload).pipe(
          switchMap((data: any) => {
            this.router.navigate(['/']);
            this.service.setSession(data.token, data.expiredAt);
            return [
              new AuthenticationAction.CreateTokenSuccessAction(data),
              new AuthenticationAction.FetchProfileAction()
            ]
          }),
          catchError((error) => {
            if (error.status === 401) {
              this.notificationService.error('오류', '인증되지 않은 이용자 입니다.');
            } else {
              this.notificationService.error('오류', '로그인 중 오류가 발생했습니다.');
            }
            return of(new AuthenticationAction.CreateTokenFailedAction(error));
          })
        );
    }),
  ));


  public fetchProfile$ = createEffect(() => this.actions$.pipe(
    ofType(AuthenticationAction.FETCH_PROFILE_ACTION),
    exhaustMap(({payload}) => {
      return this.service.fetchProfile().pipe(
          map((data: any) => {
            return new AuthenticationAction.FetchProfileSuccessAction(data)
          }),
          catchError((error) => {
            return of(new AuthenticationAction.FetchProfileFailedAction(error));
          })
        );
    }),
  ));

  public resendVerifyToken$ = createEffect(() => this.actions$.pipe(
    ofType(AuthenticationAction.RESEND_VERIFY_ACTION),
    exhaustMap(({payload}) => {
      return this.service.resendVerifyToken(payload).pipe(
          map(() => {
            this.notificationService.success('성공', '인증 코드를 성공적으로 재 발송했습니다.');
            return new AuthenticationAction.ResendVerifySuccessAction();
          }),
          catchError((error) => {
            this.notificationService.error('오류', '인증코드 재발 송 중 오류가 발생했습니다.');
            return of(new AuthenticationAction.ResendVerifyFailedAction(error));
          })
        );
    }),
  ));

  public verify$ = createEffect(() => this.actions$.pipe(
    ofType(AuthenticationAction.VERIFY_ACTION),
    exhaustMap(({payload}) => {
      return this.service.verify(payload).pipe(
          map(() => {
            this.router.navigate(['/']);
            return new AuthenticationAction.VerifySuccessAction();
          }),
          catchError((error) => {
            console.log(error);
            this.notificationService.error('오류', '인증 중 오류가 발생했습니다.');
            return of(new AuthenticationAction.VerifyFailedAction(error));
          })
        );
    }),
  ));
}
