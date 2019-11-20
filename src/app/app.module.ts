import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoute } from './app.routing';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports     : [
    BrowserModule,
    ReactiveFormsModule,
    CoreModule,
    AppRoute
  ],
  declarations: [
    AppComponent
  ],
  bootstrap   : [AppComponent]
})
export class AppModule {
}
