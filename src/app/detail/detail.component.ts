import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ComicModel } from '../shared/comics-service/comic.model';
import { ComicsService } from '../shared/comics-service/comics.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'comics-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  comic$: Observable<ComicModel>;

  constructor(private comicsService: ComicsService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.comic$ = this.comicsService.get(this.activatedRoute.snapshot.params.id);
  }

}
