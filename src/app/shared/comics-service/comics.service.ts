import { Injectable } from '@angular/core';
import { SharedServiceModule } from '../shared-service.module';
import { ComicModel } from './comic.model';
import { Observable, of } from 'rxjs';
import { comicsMock } from './comic.mock';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: SharedServiceModule
})
export class ComicsService {

  constructor(private http: HttpClient) { }

  listMocked(): Observable<Array<ComicModel>> {
    return of(comicsMock);
  }

  list(volumeId?: number): Observable<Array<ComicModel>> {
    const options: {params?: {[param: string]: string | string[]}} = {};
    if (volumeId) {
      options.params = {volumeId: volumeId.toString()};
    }
    return this.http.get<Array<ComicModel>>(`${environment.apiUrl}/comics`, options);
  }
}
