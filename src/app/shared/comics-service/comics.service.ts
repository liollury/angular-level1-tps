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
  private comicsMock: Array<ComicModel>;

  constructor(private http: HttpClient) {
    this.comicsMock = comicsMock;
  }

  listMocked(): Observable<Array<ComicModel>> {
    return of(this.comicsMock);
  }

  list(volumeId?: number): Observable<Array<ComicModel>> {
    const options: {params?: {[param: string]: string | string[]}} = {};
    if (volumeId) {
      options.params = {volumeId: volumeId.toString()};
    }
    return this.http.get<Array<ComicModel>>(`${environment.apiUrl}/comics`, options);
  }

  deleteMock(comicToDelete: ComicModel) {
    this.comicsMock = this.comicsMock.filter((comic: ComicModel) => comic !== comicToDelete);
  }

  delete(comic: ComicModel) {
    return this.http.delete(`${environment.apiUrl}/comics/${comic.id}`);
  }
}
