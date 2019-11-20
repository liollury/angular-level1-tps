import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DetailRoute } from './detail.routing';
import { DetailComponent } from './detail.component';

@NgModule({
  declarations: [DetailComponent],
  imports     : [
    CommonModule,
    SharedModule,
    DetailRoute
  ]
})
export class DetailModule {
}
