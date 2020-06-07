import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ReactiveFormsModule } from '@angular/forms';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { FooterModule } from '../footer/footer.module';
import { HeaderModule } from '../header/header.module';

@NgModule({
  declarations: [AuthenticationComponent],
  imports: [
    CommonModule,
    NzFormModule,
    NzButtonModule,
    NzInputModule,
    ReactiveFormsModule,
    NzSpinModule,
    NzNotificationModule,
    FooterModule,
    HeaderModule
  ],
  exports: [
    AuthenticationComponent
  ]
})
export class AuthenticationModule { }
