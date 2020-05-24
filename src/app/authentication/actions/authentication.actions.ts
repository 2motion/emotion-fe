import { Action } from '@ngrx/store';

export const SIGN_UP_ACTION = '[Article] SIGN_UP_ACTION';
export const SIGN_UP_SUCCESS_ACTION = '[Article] SIGN_UP_SUCCESS_ACTION';
export const SIGN_UP_FAILED_ACTION = '[Article] SIGN_UP_FAILED_ACTION';

export class SignUpAction implements Action {
  public readonly type = SIGN_UP_ACTION;
  public constructor(public payload: {
    email: string,
    password: string,
    name: string,
  }) { }
}

export class SignUpSuccessAction implements Action {
  public readonly type = SIGN_UP_SUCCESS_ACTION;
  public constructor() { }
}

export class SignUpFailedAction implements Action {
  public readonly type = SIGN_UP_FAILED_ACTION;
  public constructor() { }
}

export type Actions = SignUpAction | SignUpSuccessAction | SignUpFailedAction;