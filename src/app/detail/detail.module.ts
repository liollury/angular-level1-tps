import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { detailRoute } from './detail.routing';

@NgModule({
  imports: [
    CommonModule,
    detailRoute
  ],
  declarations: [DetailComponent]
})
export class DetailModule { }
