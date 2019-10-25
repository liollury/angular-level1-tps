import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoute } from './app.routing';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    AppRoute
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
