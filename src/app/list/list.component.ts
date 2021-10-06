import { Component, OnInit } from '@angular/core';
import { comics } from '../comics.data';
import { ComicModel } from '../model/comic.model';

@Component({
  selector: 'comics-list',
  templateUrl: './list.component.html',
  styleUrls: [ './list.component.scss' ]
})
export class ListComponent implements OnInit {
  comics: Array<ComicModel>;

  ngOnInit() {
    this.comics = comics;
  }

  onDeleteComic(comic: ComicModel) {
    this.comics = this.comics.filter((c: ComicModel) => c !== comic);
  }

}
