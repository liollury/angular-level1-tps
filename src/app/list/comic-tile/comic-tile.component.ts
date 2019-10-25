import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ComicModel } from '../../shared/comics-service/comic.model';

@Component({
  selector: 'comics-comic-tile',
  templateUrl: './comic-tile.component.html',
  styleUrls: ['./comic-tile.component.scss']
})
export class ComicTileComponent {
  @Input()
  comic: ComicModel;

  @Output()
  delete: EventEmitter<ComicModel> = new EventEmitter<ComicModel>();

  deleteComic() {
    this.delete.emit(this.comic);
  }
}
