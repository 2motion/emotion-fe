import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { NotfoundModule } from './shared/notfound/notfound.module';
import { AuthenticationComponent } from './authentication/authentication.component';


const routes: Routes = [
  {
    path: '',
    component: ArticleComponent,
  },
  {
    path: 'login',
    component: AuthenticationComponent
  },
  {
    path: 'sign-up',
    component: AuthenticationComponent
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
