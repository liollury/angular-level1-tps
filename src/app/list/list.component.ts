import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ComicModel } from '../shared/comics/comic.model';
import { ComicsService } from '../shared/comics/comics.service';

@Component({
  selector: 'comics-list',
  templateUrl: './list.component.html',
  styleUrls: [ './list.component.scss' ]
})
export class ListComponent implements OnInit {
  public search = new FormControl();
  public comics: Array<ComicModel>;

  constructor(
    private comicsService: ComicsService
  ) { }

  ngOnInit() {
    this.comics = this.comicsService.list();
  }

  onDeleteComic(comic: ComicModel) {
    this.comicsService.delete(comic);
    this.comics = this.comicsService.list();
  }

}
