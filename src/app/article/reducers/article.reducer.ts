import * as ArticleAction from '../actions/article.actions';
import ArticleModel from '../model/article.model';

export interface State {
  selectedEntity: ArticleModel;
  entities: ArticleModel[];
  selectedArticleId: number | null;
  isLoadingEntites: boolean;
}

export const initialState: State = {
  selectedEntity: null,
  entities: [],
  selectedArticleId: null,
  isLoadingEntites: true,
};

export function reducer(state = initialState, action: ArticleAction.Actions): State {
  switch (action.type) {
    case ArticleAction.FETCH_DETAIL:
      return {
        ...state,
        isLoadingEntites: true,
        selectedEntity: null,
        entities: []
      }
    case ArticleAction.FETCH_DETAIL_SUCCESS:
      return {
        ...state,
        selectedEntity: action.payload,
        isLoadingEntites: false
      }
    case ArticleAction.FETCH_DETAIL_FAILED:
      return {
        ...state,
        isLoadingEntites: false
      }
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
