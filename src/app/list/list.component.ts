import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { merge, Observable, of, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { ComicModel } from '../shared/comics/comic.model';
import { ComicsService } from '../shared/comics/comics.service';

@Component({
  selector   : 'comics-list',
  templateUrl: './list.component.html',
  styleUrls  : ['./list.component.scss']
})
export class ListComponent implements OnInit {
  search = new FormControl('');
  comics$: Observable<Array<ComicModel>>;
  deleteChanges: Subject<void> = new Subject<void>();

  constructor(private comicsService: ComicsService) {
  }

  ngOnInit() {
    this.comics$ = merge(
      this.searchChanges(),
      this.deleteChanges,
      of(null)
    ).pipe(
      switchMap(() => this.comicsService.list(this.search.value))
    );
  }

  onDeleteComic(comic: ComicModel) {
    this.comicsService.delete(comic).subscribe(() => {
      this.deleteChanges.next();
    });
  }

  private searchChanges(): Observable<string> {
    return this.search.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()
    );
  }

}
