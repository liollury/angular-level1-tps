import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { ComicTileComponent } from './comic-tile/comic-tile.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ListRoute } from './list.routing';

@NgModule({
  declarations: [
    ListComponent,
    ComicTileComponent
  ],
  imports     : [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    ListRoute
  ],
  exports     : [
    ListComponent
  ]
})
export class ListModule {
}
