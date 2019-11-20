import { Component, OnInit } from '@angular/core';

import { CategoryModel } from '../../model/category.model';
import { categoriesMock } from '../../categories.data';

@Component({
  selector   : 'comics-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls  : ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  public categories: Array<CategoryModel>;

  ngOnInit() {
    this.categories = categoriesMock;
  }

}
