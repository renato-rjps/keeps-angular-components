import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KpFilterComponent } from './kp-filter.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [KpFilterComponent],
  exports: [KpFilterComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ]
})
export class KpFilterModule { }
