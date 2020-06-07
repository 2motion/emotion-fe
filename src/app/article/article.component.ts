import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import * as ArticleActions from './actions/article.actions';
import ArticleModel from './model/article.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  public selectedArticle$: Observable<ArticleModel>;
  public artciles$: Observable<ArticleModel[]>;
  public isLoadingEntites$: Observable<boolean>;

  public constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute
    ) {
    this.artciles$ = this.store.select(state => state.article.entities);
    this.selectedArticle$ = this.store.select(state => state.article.selectedEntity);
    this.isLoadingEntites$ = this.store.select(state => state.article.isLoadingEntites);
  }

  public ngOnInit(): void {
    const articleId = this.route.snapshot.params.id;
    if (articleId) {
      this.store.dispatch(new ArticleActions.FetchDetailAction(articleId));
    } else {
      this.store.dispatch(new ArticleActions.FetchAction({}));
    }
  }
}
