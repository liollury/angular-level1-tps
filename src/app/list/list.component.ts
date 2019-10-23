import { Component, OnInit } from '@angular/core';
import { ComicsService } from '../shared/comics-service/comics.service';
import { Observable } from 'rxjs';
import { ComicModel } from '../shared/comics-service/comic.model';

@Component({
  selector: 'comics-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  comics$: Observable<Array<ComicModel>>;

  constructor(private comicsService: ComicsService) { }

  ngOnInit() {
    this.comics$ = this.comicsService.list();
  }

}
