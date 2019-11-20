import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports     : [
    CommonModule
  ],
  declarations: [
    SidenavComponent,
    HeaderComponent
  ],
  exports     : [
    SidenavComponent,
    HeaderComponent
  ]
})
export class CoreModule {
}
