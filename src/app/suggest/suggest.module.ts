import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuggestRoute } from './suggest.routing';
import { SuggestComponent } from './suggest.component';

@NgModule({
  imports: [
    CommonModule,
    SuggestRoute
  ],
  declarations: [ SuggestComponent ]
})
export class SuggestModule { }
