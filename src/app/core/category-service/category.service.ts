import { Injectable } from '@angular/core';
import { CoreServiceModule } from '../core-service.module';
import { Observable, of } from 'rxjs';
import { CategoryModel } from './category.model';
import { categoriesMock } from './category.mock';

@Injectable({
  providedIn: CoreServiceModule
})
export class CategoryService {

  constructor() { }

  list(): Observable<Array<CategoryModel>> {
    return of(categoriesMock);
  }
}
