import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { SharedModule } from '../shared.module';
import { ComicModel } from './comic.model';
import { comicsMock } from './comics.data';

@Injectable({
  providedIn: SharedModule
})
export class ComicsService {
  private comicsMock: Array<ComicModel> = comicsMock;

  list(search?: string): Observable<Array<ComicModel>> {
    return of(this.comicsMock).pipe(
      map((comics: Array<ComicModel>) => comics.filter((comic: ComicModel) => comic.name.toLowerCase().includes(search.toLowerCase())))
    );
  }

  delete(comicToDelete: ComicModel): Observable<any> {
    this.comicsMock = this.comicsMock.filter((comic: ComicModel) => comic !== comicToDelete);

    return of(null);
  }


}
