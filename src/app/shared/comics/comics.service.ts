import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { ComicModel } from './comic.model';
import { comicsMock } from './comic.mock';
import { environment } from '../../../environments/environment';
import { SharedServiceModule } from '../shared-service.module';

@Injectable({
  providedIn: SharedServiceModule
})
export class ComicsService {
  public static MY_COMICS_ID = 12345;
  private static RESOURCE = 'comics';
  private comicsMock: Array<ComicModel> = comicsMock;

  constructor (
    private http: HttpClient
  ) { }

  listMocked (): Observable<Array<ComicModel>> {
    return of(comicsMock);
  }

  list (volumeId?: number, search?: string): Observable<Array<ComicModel>> {
    let params: HttpParams = new HttpParams();

    if (volumeId) {
      params = params.set('volumeId', volumeId.toString());
    }

    if (search) {
      params = params.set('q', search);
    }

    return this.http.get<Array<ComicModel>>(`${environment.apiUrl}/${ComicsService.RESOURCE}`, {
      params
    });
  }

  get (comicId: number): Observable<ComicModel> {
    return this.http.get<ComicModel>(`${environment.apiUrl}/${ComicsService.RESOURCE}/${comicId}`);
  }

  deleteMock (comicToDelete: ComicModel): void {
    this.comicsMock = this.comicsMock.filter((comic: ComicModel) => comic !== comicToDelete);
  }

  delete (comic: ComicModel): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/comics/${comic.id}`);
  }

  create (comic: ComicModel): Observable<void> {
    return this.http.post<void>(`${environment.apiUrl}/${ComicsService.RESOURCE}`, {
      volumeId: ComicsService.MY_COMICS_ID,
      ...comic
    });
  }

  createMock (comic: ComicModel): void {
    this.comicsMock.push({
      volumeId: ComicsService.MY_COMICS_ID,
      ...comic
    });
  }

}
