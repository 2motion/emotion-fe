import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';

const routes: Routes = [
  {
    path: '',
    component: ArticleComponent,
  },
  {
    path: 'test',
    component: ArticleComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    initialNavigation: 'enabled',
})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
