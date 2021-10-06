import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryModel } from '../category/category.model';
import { CategoryService } from '../category/category.service';

@Component({
  selector: 'comics-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: [ './sidenav.component.scss' ]
})
export class SidenavComponent implements OnInit {
  public categories$: Observable<Array<CategoryModel>>;

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.categories$ = this.categoryService.list();
  }

}
