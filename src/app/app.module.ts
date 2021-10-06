import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { DetailModule } from './detail/detail.module';
import { ListModule } from './list/list.module';
import { SuggestModule } from './suggest/suggest.module';

@NgModule({
  imports: [
    BrowserModule,
    ListModule,
    CoreModule,
    DetailModule,
    SuggestModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
