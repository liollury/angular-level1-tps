import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { merge, Observable, Subject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { ComicModel } from '../shared/comics/comic.model';
import { ComicsService } from '../shared/comics/comics.service';

@Component({
  selector: 'comics-list',
  templateUrl: './list.component.html',
  styleUrls: [ './list.component.scss' ]
})
export class ListComponent implements OnInit {
  comics$: Observable<Array<ComicModel>>;
  deleteChanges: Subject<void> = new Subject<void>();

  constructor (
    private comicsService: ComicsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit () {
    this.comics$ = merge(
      this.activatedRoute.params,
      this.deleteChanges
    ).pipe(
      map(() => parseInt(this.activatedRoute.snapshot.params.category, 10)),
      switchMap((volumeId: number) => this.comicsService.list(volumeId))
    );
  }

  deleteComic (comic: ComicModel) {
    this.comicsService.delete(comic).subscribe(() => this.deleteChanges.next());
  }

}
