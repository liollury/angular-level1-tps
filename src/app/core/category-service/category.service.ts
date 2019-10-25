import { Injectable } from '@angular/core';
import { CoreServiceModule } from '../core-service.module';
import { Observable, of } from 'rxjs';
import { CategoryModel } from './category.model';
import { categoriesMock } from './category.mock';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: CoreServiceModule
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  listMocked(): Observable<Array<CategoryModel>> {
    return of(categoriesMock);
  }

  list(): Observable<Array<CategoryModel>> {
    return this.http.get<Array<CategoryModel>>(`${environment.apiUrl}/categories`);
  }
}
