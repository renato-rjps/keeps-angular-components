import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KpFilterComponent } from './kp-filter.component';



@NgModule({
  declarations: [KpFilterComponent],
  exports: [KpFilterComponent],
  imports: [
    CommonModule
  ]
})
export class KpFilterModule { }
