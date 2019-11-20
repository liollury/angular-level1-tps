import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SuggestRoute } from './suggest.routing';
import { SuggestComponent } from './suggest.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SuggestComponent],
  imports     : [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    SuggestRoute
  ]
})
export class SuggestModule {
}
