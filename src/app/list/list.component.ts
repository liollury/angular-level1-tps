import { Component, OnInit } from '@angular/core';
import { ComicsService } from '../shared/comics-service/comics.service';

@Component({
  selector: 'comics-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private comicsService: ComicsService) { }

  ngOnInit() {

  }

}
