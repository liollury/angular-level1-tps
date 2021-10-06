import { Injectable } from '@angular/core';
import { SharedModule } from '../shared.module';
import { ComicModel } from './comic.model';
import { comicsMock } from './comics.data';

@Injectable({
  providedIn: SharedModule
})
export class ComicsService {
  private comicsMock: Array<ComicModel> = comicsMock;

  list(): Array<ComicModel> {
    return this.comicsMock;
  }

  delete(comicToDelete: ComicModel): void {
    this.comicsMock = this.comicsMock.filter((comic: ComicModel) => comic !== comicToDelete);
  }

}
