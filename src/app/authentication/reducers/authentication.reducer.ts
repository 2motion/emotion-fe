import * as AuthenticationAction from '../actions/authentication.actions';
import ProfileModel from '../model/profile.model';

export interface State {
  isLoadingForm: boolean;
  profile: ProfileModel;
  isAuthenticated: boolean;
}

export const initialState: State = {
  isLoadingForm: false,
  profile: {},
  isAuthenticated: false
};

export function reducer(state = initialState, action: AuthenticationAction.Actions): State {
  switch (action.type) {
    case AuthenticationAction.SIGN_UP_ACTION:
      return {
        ...state,
        ...{
          isLoadingForm: true
        }
      }
    case AuthenticationAction.CREATE_TOKEN_ACTION:
      return {
        ...state,
        ...{
          isLoadingForm: true
        }
      }
    case AuthenticationAction.VERIFY_ACTION:
      return {
        ...state,
        ...{
          isLoadingForm: true
        }
      }
    case AuthenticationAction.FETCH_PROFILE_ACTION:
    case AuthenticationAction.FETCH_PROFILE_FAILED_ACTION:
      return {
        ...state,
        ...{
          profile: {}
        }
      }
    case AuthenticationAction.FETCH_PROFILE_SUCCESS_ACTION:
      return {
        ...state,
        ...{
          profile: action.payload
        }
      }
    case AuthenticationAction.CREATE_TOKEN_FAILED_ACTION:
    case AuthenticationAction.CREATE_TOKEN_SUCCESS_ACTION:
    case AuthenticationAction.VERIFY_FAILED_ACTION:
    case AuthenticationAction.VERIFY_SUCCESS_ACTION:
    case AuthenticationAction.SIGN_UP_FAILED_ACTION:
    case AuthenticationAction.SIGN_UP_SUCCESS_ACTION:
      return {
        ...state,
        ...{
          isLoadingForm: false
        }
      }
    default: {
      return state;
    }
  }
}
