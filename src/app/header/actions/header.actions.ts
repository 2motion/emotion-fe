import { Action } from '@ngrx/store';

export const VISIBLE_AUTHENTICATE_MODAL = '[Header] VISIBLE_AUTHENTICATE_MODAL';
export const HIDDEN_AUTHENTICATE_MODAL = '[Header] HIDDEN_AUTHENTICATE_MODAL';
export const VISIBLE_AUTHENTICATE_MODAL_SUCCESS = '[Header] VISIBLE_AUTHENTICATE_MODAL_SUCCESS';
export const VISIBLE_AUTHENTICATE_MODAL_FAILED = '[Header] VISIBLE_AUTHENTICATE_MODAL_FAILED';

export class VisibleAuthenticateModalAction implements Action {
  public readonly type = VISIBLE_AUTHENTICATE_MODAL;
  constructor() { }
}

export class HiddenAuthenticateModalAction implements Action {
  public readonly type = HIDDEN_AUTHENTICATE_MODAL;
  constructor() { }
}

export class VisibleAuthenticateModalSuccessAction implements Action {
  public readonly type = VISIBLE_AUTHENTICATE_MODAL_SUCCESS;
  constructor(public payload) {}
}

export class VisibleAuthenticateModalFailedAction implements Action {
  public readonly type = VISIBLE_AUTHENTICATE_MODAL_FAILED;
  constructor(public payload) { }
}

export type Actions = VisibleAuthenticateModalAction | HiddenAuthenticateModalAction | VisibleAuthenticateModalSuccessAction | VisibleAuthenticateModalFailedAction;
