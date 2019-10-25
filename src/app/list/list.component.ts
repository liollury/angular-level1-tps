import { Component, OnInit } from '@angular/core';
import { ComicsService } from '../shared/comics-service/comics.service';
import { BehaviorSubject, merge, Observable, Subject } from 'rxjs';
import { ComicModel } from '../shared/comics-service/comic.model';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'comics-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  comics$: Observable<Array<ComicModel>>;
  deleteChanges: Subject<void> = new Subject<void>();

  constructor(private comicsService: ComicsService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.comics$ = merge(this.activatedRoute.params, this.deleteChanges).pipe(
      map(() => parseInt(this.activatedRoute.snapshot.params.category, 10)),
      switchMap((volumeId: number) => this.comicsService.list(volumeId))
    );
  }

  deleteComic(comic: ComicModel) {
    this.comicsService.delete(comic).subscribe(() => this.deleteChanges.next());
  }

}
