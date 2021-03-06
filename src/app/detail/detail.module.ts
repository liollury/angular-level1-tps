import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DetailComponent } from './detail.component';
import { detailRoute } from './detail.routing';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    detailRoute
  ],
  declarations: [ DetailComponent ]
})
export class DetailModule { }
