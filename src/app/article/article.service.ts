import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  public constructor(private readonly http: HttpClient) {}

  public fetch() {
    return this.http.get(`${environment.apiEndPoint}/articles`);
  }

  public fetchById(articleId: number) {
    return this.http.get(`${environment.apiEndPoint}/articles/${articleId}`);
  }
}
