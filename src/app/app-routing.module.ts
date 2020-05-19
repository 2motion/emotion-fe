import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { NotfoundModule } from './shared/notfound/notfound.module';


const routes: Routes = [
  {
    path: '',
    component: ArticleComponent,
  },
  {
    path: '**',
    redirectTo: '404'
  },
  {
    path: '404',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), NotfoundModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
