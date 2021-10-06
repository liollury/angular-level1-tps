import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedServiceModule } from './shared-service.module';

@NgModule({
  imports: [
    CommonModule,
    SharedServiceModule
  ],
  exports: [
    SharedServiceModule
  ]
})
export class SharedModule { }
