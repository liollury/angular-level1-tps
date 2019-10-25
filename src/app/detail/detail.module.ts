import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { detailRoute } from './detail.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    detailRoute
  ],
  declarations: [DetailComponent]
})
export class DetailModule { }
