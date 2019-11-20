import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SuggestRoute } from './suggest.routing';
import { SuggestComponent } from './suggest.component';

@NgModule({
  declarations: [SuggestComponent],
  imports     : [
    CommonModule,
    SharedModule,
    SuggestRoute
  ]
})
export class SuggestModule {
}
