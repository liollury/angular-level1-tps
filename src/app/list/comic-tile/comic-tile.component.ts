import { Component, Input, OnInit } from '@angular/core';
import { ComicModel } from '../../shared/comics-service/comic.model';

@Component({
  selector: 'comics-comic-tile',
  templateUrl: './comic-tile.component.html',
  styleUrls: ['./comic-tile.component.scss']
})
export class ComicTileComponent implements OnInit {
  @Input()
  comic: ComicModel;

  constructor() { }

  ngOnInit() {
  }

}
