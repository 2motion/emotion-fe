import { Action } from '@ngrx/store';
import SignUpPayloadModel from '../model/sign-up-payload.model';
import SignUpSuccessPayloadModel from '../model/sign-up-success-payload.model';
import VerifyPayloadModel from '../model/verify-payload.model';
import CreateTokenPayloadModel from '../model/create-token-payload.model';
import ProfileModel from '../model/profile.model';

export const SIGN_UP_ACTION = '[Authentication] SIGN_UP_ACTION';
export const SIGN_UP_SUCCESS_ACTION = '[Authentication] SIGN_UP_SUCCESS_ACTION';
export const SIGN_UP_FAILED_ACTION = '[Authentication] SIGN_UP_FAILED_ACTION';
export const VERIFY_ACTION = '[Authentication] VERIFY_ACTION';
export const VERIFY_SUCCESS_ACTION = '[Authentication] VERIFY_SUCCESS_ACTION';
export const VERIFY_FAILED_ACTION = '[Authentication] VERIFY_FAILED_ACTION';
export const CREATE_TOKEN_ACTION = '[Authentication] CREATE_TOKEN_ACTION';
export const CREATE_TOKEN_SUCCESS_ACTION = '[Authentication] CREATE_TOKEN_SUCCESS_ACTION';
export const CREATE_TOKEN_FAILED_ACTION = '[Authentication] CREATE_TOKEN_FAILED_ACTION';
export const FETCH_PROFILE_ACTION = '[Authentication] FETCH_PROFILE_ACTION';
export const FETCH_PROFILE_SUCCESS_ACTION = '[Authentication] FETCH_PROFILE_SUCCESS_ACTION';
export const FETCH_PROFILE_FAILED_ACTION = '[Authentication] FETCH_PROFILE_FAILED_ACTION';

export class SignUpAction implements Action {
  public readonly type = SIGN_UP_ACTION;
  public constructor(public payload: SignUpPayloadModel) { }
}

export class SignUpSuccessAction implements Action {
  public readonly type = SIGN_UP_SUCCESS_ACTION;
  public constructor(payload: SignUpSuccessPayloadModel) { }
}

export class SignUpFailedAction implements Action {
  public readonly type = SIGN_UP_FAILED_ACTION;
  public constructor(public error) { }
}

export class VerifyAction implements Action {
  public readonly type = VERIFY_ACTION;
  public constructor(public payload: VerifyPayloadModel) { }
}

export class VerifySuccessAction implements Action {
  public readonly type = VERIFY_SUCCESS_ACTION;
  public constructor() { }
}

export class VerifyFailedAction implements Action {
  public readonly type = VERIFY_FAILED_ACTION;
  public constructor(public error) { }
}

export class CreateTokenAction implements Action {
  public readonly type = CREATE_TOKEN_ACTION;
  public constructor(public payload: CreateTokenPayloadModel) { }
}

export class CreateTokenSuccessAction implements Action {
  public readonly type = CREATE_TOKEN_SUCCESS_ACTION;
public constructor(payload: {}) { }
}

export class CreateTokenFailedAction implements Action {
  public readonly type = CREATE_TOKEN_FAILED_ACTION;
  public constructor(public error) { }
}

export class FetchProfileAction implements Action {
  public readonly type = FETCH_PROFILE_ACTION;
  public constructor() { }
}

export class FetchProfileSuccessAction implements Action {
  public readonly type = FETCH_PROFILE_SUCCESS_ACTION;
  public constructor(public payload: ProfileModel) { }
}

export class FetchProfileFailedAction implements Action {
  public readonly type = FETCH_PROFILE_FAILED_ACTION;
  public constructor(public error) { }
}

export type Actions = SignUpAction |
                      SignUpSuccessAction | 
                      SignUpFailedAction | 
                      VerifyAction | 
                      VerifySuccessAction | 
                      VerifyFailedAction | 
                      CreateTokenAction | 
                      CreateTokenSuccessAction | 
                      CreateTokenFailedAction |
                      FetchProfileAction |
                      FetchProfileSuccessAction |
                      FetchProfileFailedAction;