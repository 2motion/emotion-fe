import { Action } from '@ngrx/store';
import ArticleModel from '../model/article.model';

export const FETCH = '[Article] Fetch';
export const FETCH_SUCCESS = '[Article] Fetch SUCCESS';
export const FETCH_FAILED = '[Article] Fetch FAILED';

export class FetchAction implements Action {
  public readonly type = FETCH;
  constructor(public payload) { }
}

export class FetchSuccessAction implements Action {
  public readonly type = FETCH_SUCCESS;
  constructor(public payload: {count: number; rows: ArticleModel[]}) { }
}

export class FetchFailedAction implements Action {
  public readonly type = FETCH_FAILED;
  constructor(public payload) { }
}

export type Actions = FetchAction | FetchSuccessAction | FetchFailedAction;
