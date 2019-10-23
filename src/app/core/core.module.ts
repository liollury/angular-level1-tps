import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CoreServiceModule } from './core-service.module';

@NgModule({
  imports: [
    CommonModule,
    CoreServiceModule
  ],
  declarations: [
    HeaderComponent,
    SidenavComponent
  ],
  exports: [
    HeaderComponent,
    SidenavComponent
  ]
})
export class CoreModule { }
