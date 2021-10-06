import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoute } from './app.routing';
import { CoreModule } from './core/core.module';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CoreModule,
    AppRoute
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
