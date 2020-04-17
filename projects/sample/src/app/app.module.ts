import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgKeepsUIModule } from 'ng-keeps-ui';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgKeepsUIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
