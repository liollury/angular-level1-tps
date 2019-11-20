import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ComicTileComponent } from './comic-tile/comic-tile.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  imports     : [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    ListComponent,
    ComicTileComponent,
    HeaderComponent,
    SidenavComponent
  ],
  bootstrap   : [AppComponent]
})
export class AppModule {
}
