import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoute } from './app.routing';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ListModule } from './list/list.module';
import { DetailModule } from './detail/detail.module';
import { CreateModule } from './create/create.module';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    ListModule,
    DetailModule,
    CreateModule,
    AppRoute
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
