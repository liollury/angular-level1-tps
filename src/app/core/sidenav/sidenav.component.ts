import { Component, OnInit } from '@angular/core';
import { categoriesMock } from '../../categories.data';
import { CategoryModel } from '../../model/category.model';

@Component({
  selector: 'comics-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: [ './sidenav.component.scss' ]
})
export class SidenavComponent implements OnInit {
  public categories: Array<CategoryModel>;

  ngOnInit() {
    this.categories = categoriesMock;
  }

}
