import { NgModule } from '@angular/core';
import { KpComponentsComponent } from './kp-components.component';
import { KpFilterModule } from './kp-filter';



@NgModule({
  declarations: [KpComponentsComponent],
  imports: [
  ],
  exports: [KpComponentsComponent, KpFilterModule]
})
export class KpComponentsModule { }
