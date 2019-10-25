import { Component, OnInit } from '@angular/core';
import { ComicsService } from '../shared/comics-service/comics.service';
import { Observable } from 'rxjs';
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

  constructor(private comicsService: ComicsService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.comics$ = this.activatedRoute.params.pipe(
      map((params: any) => parseInt(params.category, 10)),
      switchMap((volumeId: number) => this.comicsService.list(volumeId))
    );
  }

}
