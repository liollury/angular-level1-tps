import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SidenavComponent,
    HeaderComponent
  ],
  exports: [
    SidenavComponent,
    HeaderComponent
  ]
})
export class CoreModule { }
