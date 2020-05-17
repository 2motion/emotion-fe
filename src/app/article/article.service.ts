import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  public constructor(private readonly http: Http) {}

  public fetch() {
    return this.http.get('http://localhost:3000/articles');
  }
}
