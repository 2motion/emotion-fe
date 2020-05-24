import * as AuthenticationAction from '../actions/authentication.actions';

export interface State {
  isLoadingForm: boolean;
}

export const initialState: State = {
  isLoadingForm: false,
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
