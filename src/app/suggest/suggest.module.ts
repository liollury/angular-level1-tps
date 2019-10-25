import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SuggestRoute } from './suggest.routing';
import { SuggestComponent } from './suggest.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    SuggestRoute
  ],
  declarations: [ SuggestComponent ]
})
export class SuggestModule { }
