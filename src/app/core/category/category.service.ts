import { Injectable } from '@angular/core';
import { CoreServiceModule } from '../core-service.module';
import { categoriesMock } from './categories.data';
import { CategoryModel } from './category.model';

@Injectable({
  providedIn: CoreServiceModule
})
export class CategoryService {

  list(): Array<CategoryModel> {
    return categoriesMock;
  }

}
