import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CoreServiceModule } from '../core-service.module';
import { CategoryModel } from './category.model';

@Injectable({
  providedIn: CoreServiceModule
})
export class CategoryService {
  private static RESOURCE = 'categories';

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Array<CategoryModel>> {
    return this.http.get<Array<CategoryModel>>(`${environment.apiUrl}/${CategoryService.RESOURCE}`);
  }

}
