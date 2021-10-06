import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { SuggestComponent } from './suggest.component';
import { SuggestRoute } from './suggest.routing';

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
