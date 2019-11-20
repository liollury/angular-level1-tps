import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoute } from './app.routing';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

@NgModule({
  imports     : [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    AppRoute
  ],
  declarations: [
    AppComponent
  ],
  bootstrap   : [AppComponent]
})
export class AppModule {
}
