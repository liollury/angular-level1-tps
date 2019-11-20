import { Injectable } from '@angular/core';

import { CoreServiceModule } from '../core-service.module';
import { CategoryModel } from './category.model';
import { categoriesMock } from './categories.data';

@Injectable({
  providedIn: CoreServiceModule
})
export class CategoryService {

  list(): Array<CategoryModel> {
    return categoriesMock;
  }

}
