import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { NotfoundModule } from './shared/notfound/notfound.module';
import { AuthenticationComponent } from './authentication/authentication.component';
import { WriteComponent } from './write/write.component';
import { ProfileComponent } from './profile/profile.component';


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
    path: 'verify',
    component: AuthenticationComponent
  },
  {
    path: 'write',
    component: WriteComponent
  },
  {
    path: 'u/:name',
    component: ProfileComponent
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
