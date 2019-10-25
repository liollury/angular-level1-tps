import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { CoreServiceModule } from '../core-service.module';
import { CategoryModel } from './category.model';
import { categoriesMock } from './category.mock';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: CoreServiceModule
})
export class CategoryService {
  private static RESOURCE = 'categories';

  constructor (
    private http: HttpClient
  ) { }

  listMocked (): Observable<Array<CategoryModel>> {
    return of(categoriesMock);
  }

  list (): Observable<Array<CategoryModel>> {
    return this.http.get<Array<CategoryModel>>(`${environment.apiUrl}/${CategoryService.RESOURCE}`);
  }

}
