import * as ArticleAction from '../actions/article.actions';
import ArticleModel from '../model/article.model';

export interface State {
  entities: ArticleModel[];
  selectedArticleId: number | null;
  isLoadingEntites: boolean;
}

export const initialState: State = {
  entities: [],
  selectedArticleId: null,
  isLoadingEntites: true,
};

export function reducer(state = initialState, action: ArticleAction.Actions): State {
  switch (action.type) {
    case ArticleAction.FETCH:
      return {
        ...state,
        isLoadingEntites: true 
      }
    case ArticleAction.FETCH_SUCCESS:
      return {
        ...state,
        entities: action.payload.rows,
        isLoadingEntites: false
      };
    case ArticleAction.FETCH_FAILED:
      return {
        ...state,
        entities: [],
        isLoadingEntites: false
      };
    default: {
      return state;
    }
  }
}
