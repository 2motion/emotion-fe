import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import * as AuthenticationAction from '../actions/authentication.actions';
import { of } from 'rxjs';
import { AuthenticationService } from '../authentication.service';

@Injectable()
export class AuthenticationEffects {

  public $signUp = createEffect(() => this.actions$.pipe(
    ofType(AuthenticationAction.SIGN_UP_ACTION),
    exhaustMap(({payload}) => {
      return this.service.signUp(payload).pipe(
        map((response) => new AuthenticationAction.SignUpSuccessAction()),
        catchError((error) => of(new AuthenticationAction.SignUpFailedAction()),
      ));
    }),
  ));

  
  public constructor(
    private readonly actions$: Actions,
    private readonly service: AuthenticationService,
  ) {}
}
