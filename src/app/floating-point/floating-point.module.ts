import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FloatingPointComponent } from './floating-point.component';


@NgModule({
  declarations: [FloatingPointComponent],
  exports: [FloatingPointComponent],
  imports: [
    CommonModule
  ]
})
export class FloatingPointModule { }
