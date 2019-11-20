import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
export class SharedModule {
}
