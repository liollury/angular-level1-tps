import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SuggestComponent } from './suggest.component';
import { SuggestRoute } from './suggest.routing';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SuggestRoute
  ],
  declarations: [ SuggestComponent ]
})
export class SuggestModule { }
