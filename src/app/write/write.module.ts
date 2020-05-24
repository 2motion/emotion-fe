import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WriteComponent } from './write.component';



@NgModule({
  declarations: [WriteComponent],
  imports: [
    CommonModule
  ],
  exports: [WriteComponent]
})
export class WriteModule { }
