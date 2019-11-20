import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './list.component';
import { ComicTileComponent } from './comic-tile/comic-tile.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports     : [
    CommonModule,
    SharedModule
  ],
  declarations: [
    ListComponent,
    ComicTileComponent
  ],
  exports     : [
    ListComponent
  ]
})
export class ListModule {
}
