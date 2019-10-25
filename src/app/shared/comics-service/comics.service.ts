import { Injectable } from '@angular/core';
import { SharedServiceModule } from '../shared-service.module';
import { ComicModel } from './comic.model';
import { Observable, of } from 'rxjs';
import { comicsMock } from './comic.mock';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: SharedServiceModule
})
export class ComicsService {

  constructor(private http: HttpClient) { }

  listMocked(): Observable<Array<ComicModel>> {
    return of(comicsMock);
  }

  list(): Observable<Array<ComicModel>> {
    return this.http.get<Array<ComicModel>>(`${environment.apiUrl}/comics`);
  }
}
