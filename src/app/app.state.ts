import { State as ArticleState } from './article/reducers/article.reducer';
import { State as HeaderState } from './header/reducers/header.reducers';
import { State as AuthenticationState } from './authentication/reducers/authentication.reducer';

export interface AppState {
  readonly article: ArticleState;
  readonly header: HeaderState;
  readonly authentication: AuthenticationState;
}
