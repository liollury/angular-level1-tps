import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoute } from './list.routing';
import { ListComponent } from './list.component';
import { SharedModule } from '../shared/shared.module';
import { ComicTileComponent } from './comic-tile/comic-tile.component';

@NgModule({
  imports: [
    CommonModule,
    ListRoute,
    SharedModule
  ],
  declarations: [ ListComponent, ComicTileComponent ]
})
export class ListModule { }
