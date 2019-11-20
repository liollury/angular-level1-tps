import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListModule } from './list/list.module';
import { CoreModule } from './core/core.module';
import { SuggestModule } from './suggest/suggest.module';
import { DetailModule } from './detail/detail.module';

@NgModule({
  imports     : [
    BrowserModule,
    ListModule,
    CoreModule,
    DetailModule,
    SuggestModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap   : [AppComponent]
})
export class AppModule {
}
