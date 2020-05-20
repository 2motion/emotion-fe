import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';


@NgModule({
  declarations: [AuthenticationComponent],
  imports: [
    CommonModule,
    NzFormModule,
    NzButtonModule,
    NzInputModule
  ],
  exports: [
    AuthenticationComponent
  ]
})
export class AuthenticationModule { }
