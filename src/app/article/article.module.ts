import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { ArticleComponent } from './article.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ArticleComponent,
  ],
  exports: [ArticleComponent],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzEmptyModule,
    NzSkeletonModule,
    RouterModule
  ],
})
export class ArticleModule { }
