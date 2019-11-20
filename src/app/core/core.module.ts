import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { CoreServiceModule } from './core-service.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SidenavComponent,
    HeaderComponent
  ],
  imports     : [
    CommonModule,
    CoreServiceModule,
    RouterModule
  ],
  exports     : [
    SidenavComponent,
    HeaderComponent
  ]
})
export class CoreModule {
}
