import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    NzButtonModule,
    NzLayoutModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
