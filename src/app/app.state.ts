import { State as ArticleState } from './article/reducers/article.reducer';

export interface AppState {
  readonly article: ArticleState;
}
