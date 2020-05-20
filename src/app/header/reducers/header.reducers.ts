
import * as HeadersAction from '../actions/header.actions';

export interface State {
  isVisibleAuthenticateModal: boolean;
}

export const initialState: State = {
  isVisibleAuthenticateModal: false,
};

export function reducer(state = initialState, action: HeadersAction.Actions): State {
  switch (action.type) {
    case HeadersAction.VISIBLE_AUTHENTICATE_MODAL:
      return {
        ...state,
        isVisibleAuthenticateModal: false
      }
    case HeadersAction.VISIBLE_AUTHENTICATE_MODAL_SUCCESS:
      return {
        ...state,
        isVisibleAuthenticateModal: true
      };
    case HeadersAction.VISIBLE_AUTHENTICATE_MODAL_FAILED:
      return {
        ...state,
        isVisibleAuthenticateModal: false
      };
    default: {
      return state;
    }
  }
}
