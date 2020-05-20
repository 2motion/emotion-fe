import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { exhaustMap } from 'rxjs/operators';
import * as HeaderActions from '../actions/header.actions';

@Injectable()
export class HeaderEffects {
  public $visbleAuthenticateModal = createEffect(() => this.actions$.pipe(
    ofType(HeaderActions.VISIBLE_AUTHENTICATE_MODAL),
    exhaustMap(() => {
      return of(new HeaderActions.VisibleAuthenticateModalSuccessAction({}));
    }),
  ));

  public constructor(
    private readonly actions$: Actions,
  ) {}
}
