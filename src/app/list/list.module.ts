import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ComicTileComponent } from './comic-tile/comic-tile.component';
import { ListComponent } from './list.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    ListComponent,
    ComicTileComponent
  ],
  exports: [
    ListComponent
  ]
})
export class ListModule { }
