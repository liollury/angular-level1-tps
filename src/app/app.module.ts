import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoute } from './app.routing';
import { CoreModule } from './core/core.module';

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
