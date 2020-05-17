import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  public constructor(private readonly http: Http) {}

  public fetch() {
    return this.http.get(`${environment.apiEndPoint}/articles`);
  }
}
