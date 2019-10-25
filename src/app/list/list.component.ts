import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { merge, Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';

import { ComicModel } from '../shared/comics/comic.model';
import { ComicsService } from '../shared/comics/comics.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'comics-list',
  templateUrl: './list.component.html',
  styleUrls: [ './list.component.scss' ]
})
export class ListComponent implements OnInit {
  search = new FormControl();
  comics$: Observable<Array<ComicModel>>;
  deleteChanges: Subject<void> = new Subject<void>();

  constructor (
    private comicsService: ComicsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit () {
    this.comics$ = merge(
      this.searchChanges(),
      this.activatedRoute.params,
      this.deleteChanges
    ).pipe(
      switchMap(() => this.comicsService.list(this.volumeId, this.search.value))
    );
  }

  deleteComic (comic: ComicModel) {
    this.comicsService.delete(comic).subscribe(() => this.deleteChanges.next());
  }

  private get volumeId (): number {
    return parseInt(this.activatedRoute.snapshot.params.category, 10);
  }

  private searchChanges (): Observable<string> {
    return this.search.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()
    );
  }

}
