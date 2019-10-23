import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoute } from './list.routing';
import { ListComponent } from './list.component';

@NgModule({
  imports: [
    CommonModule,
    ListRoute
  ],
  declarations: [ ListComponent ]
})
export class ListModule { }
