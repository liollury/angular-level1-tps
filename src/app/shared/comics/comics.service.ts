import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { SharedServiceModule } from '../shared-service.module';
import { ComicModel } from './comic.model';

@Injectable({
  providedIn: SharedServiceModule
})
export class ComicsService {
  public static MY_COMICS_ID = 12345;
  private static RESOURCE = 'comics';

  constructor(
    private http: HttpClient
  ) { }

  list(volumeId?: number, search?: string): Observable<Array<ComicModel>> {
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

  get(comicId: number): Observable<ComicModel> {
    return this.http.get<ComicModel>(`${environment.apiUrl}/${ComicsService.RESOURCE}/${comicId}`);
  }

  delete(comic: ComicModel): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/${ComicsService.RESOURCE}/${comic.id}`);
  }

  create(comic: ComicModel): Observable<void> {
    comic.volumeId = ComicsService.MY_COMICS_ID;
    return this.http.post<void>(`${environment.apiUrl}/${ComicsService.RESOURCE}`, comic);
  }

}
