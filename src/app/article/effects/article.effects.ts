import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, exhaustMap, map } from 'rxjs/operators';
import * as ArticleActions from '../actions/article.actions';
import { ArticleService } from '../article.service';

@Injectable()
export class ArticleEffects {
  public $fetch = createEffect(() => this.actions$.pipe(
    ofType(ArticleActions.FETCH),
    exhaustMap(() => {
      return this.service.fetch().pipe(
        map((data: any) => new ArticleActions.FetchSuccessAction(data)),
        catchError((error) => of(new ArticleActions.FetchFailedAction(error)),
      ));
    }),
  ));

  public $fetchDetail = createEffect(() => this.actions$.pipe(
    ofType(ArticleActions.FETCH_DETAIL),
    exhaustMap(({payload}) => {
      return this.service.fetchById(payload).pipe(
        map((data: any) => new ArticleActions.FetchDetailSuccessAction(data)),
        catchError((error) => of(new ArticleActions.FetchDetailFailedAction(error)),
      ));
    }),
  ));

  public constructor(
    private readonly actions$: Actions,
    private readonly service: ArticleService,
  ) {}
}
