import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { AuthenticationModule } from '../authentication/authentication.module';
import { RouterModule } from '@angular/router';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    NzButtonModule,
    NzLayoutModule,
    NzModalModule,
    AuthenticationModule,
    RouterModule,
    NzAvatarModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
