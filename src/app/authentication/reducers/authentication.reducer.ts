import * as AuthenticationAction from '../actions/authentication.actions';

export interface State {
}

export const initialState: State = {
};

export function reducer(state = initialState, action: AuthenticationAction.Actions): State {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
