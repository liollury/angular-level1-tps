import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CoreServiceModule } from '../core-service.module';
import { categoriesMock } from './categories.data';
import { CategoryModel } from './category.model';

@Injectable({
  providedIn: CoreServiceModule
})
export class CategoryService {

  list(): Observable<Array<CategoryModel>> {
    return of(categoriesMock);
  }

}
