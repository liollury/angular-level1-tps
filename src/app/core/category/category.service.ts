import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { CoreServiceModule } from '../core-service.module';
import { CategoryModel } from './category.model';
import { categoriesMock } from './categories.data';

@Injectable({
  providedIn: CoreServiceModule
})
export class CategoryService {

  list(): Observable<Array<CategoryModel>> {
    return of(categoriesMock);
  }

}
