import { State as ArticleState } from './article/reducers/article.reducer';
import { State as HeaderState } from './header/reducers/header.reducers';

export interface AppState {
  readonly article: ArticleState;
  readonly header: HeaderState;
}
