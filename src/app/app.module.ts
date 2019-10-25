import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoute } from './app.routing';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ListModule } from './list/list.module';
import { DetailModule } from './detail/detail.module';
import { SuggestModule } from './suggest/suggest.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    ListModule,
    DetailModule,
    SuggestModule,
    HttpClientModule,
    AppRoute
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
