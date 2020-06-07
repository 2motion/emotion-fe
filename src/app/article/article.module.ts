import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { ArticleComponent } from './article.component';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { NzIconModule } from 'ng-zorro-antd/icon';

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
    RouterModule,
    HeaderModule,
    FooterModule,
    NzIconModule
  ],
})
export class ArticleModule { }
