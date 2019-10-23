import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoute } from './list.routing';
import { ListComponent } from './list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ListRoute,
    SharedModule
  ],
  declarations: [ ListComponent ]
})
export class ListModule { }
