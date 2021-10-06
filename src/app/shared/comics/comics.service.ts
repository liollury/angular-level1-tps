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
  public static MY_COMICS_ID = 12345;
  private comicsMock: Array<ComicModel> = comicsMock;

  list(volumeId?: number, search?: string): Observable<Array<ComicModel>> {
    return of(this.comicsMock).pipe(
      map((comics: Array<ComicModel>) => comics.filter((comic: ComicModel) => !volumeId || comic.volumeId === volumeId)),
      map((comics: Array<ComicModel>) => comics.filter((comic: ComicModel) => comic.name.toLowerCase().includes(search)))
    );
  }

  delete(comicToDelete: ComicModel): Observable<any> {
    this.comicsMock = this.comicsMock.filter((comic: ComicModel) => comic !== comicToDelete);
    return of(null);
  }

  create(comic: ComicModel): void {
    this.comicsMock.push({
      volumeId: ComicsService.MY_COMICS_ID,
      ...comic
    });
  }

}
