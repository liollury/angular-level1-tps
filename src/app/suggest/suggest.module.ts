import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SuggestRoute } from './suggest.routing';
import { SuggestComponent } from './suggest.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SuggestRoute
  ],
  declarations: [ SuggestComponent ]
})
export class SuggestModule { }
