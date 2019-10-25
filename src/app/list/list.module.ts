import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ListRoute } from './list.routing';
import { ListComponent } from './list.component';
import { ComicTileComponent } from './comic-tile/comic-tile.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ListRoute
  ],
  declarations: [
    ListComponent,
    ComicTileComponent
  ]
})
export class ListModule { }
