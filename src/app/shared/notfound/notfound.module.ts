import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotfoundComponent } from './notfound.component';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [NotfoundComponent],
  imports: [
    CommonModule,
    NzResultModule,
    NzButtonModule,
    RouterModule
  ],
  exports: [
    NotfoundComponent
  ]
})
export class NotfoundModule { }
