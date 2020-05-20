import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import * as ArticleActions from './actions/article.actions';
import ArticleModel from './model/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  public artciles$: Observable<ArticleModel[]>;
  public isLoadingEntites$: Observable<boolean>
  public constructor(private store: Store<AppState>) {
    this.artciles$ = this.store.select(state => state.article.entities);
    this.isLoadingEntites$ = this.store.select(state => state.article.isLoadingEntites);
  }

  public ngOnInit(): void {
    this.store.dispatch(new ArticleActions.FetchAction({}));
  }
}
