import { Injectable } from '@angular/core';
import { SharedServiceModule } from '../shared-service.module';
import { ComicModel } from './comic.model';
import { SnakeToCamelUtil } from '../utils/snake-to-camel.util';
import { Observable, of } from 'rxjs';
import { comicsMock } from './comic.mock';

@Injectable({
  providedIn: SharedServiceModule
})
export class ComicsService {

  constructor() { }

  list(): Observable<Array<ComicModel>> {
    return of(comicsMock);
  }

  wrapComic(obj: any): ComicModel {
    if (obj) {
      const comic: ComicModel = new ComicModel();
      Object.assign(comic, SnakeToCamelUtil.convertObject(obj));
      return comic;
    }
  }


}
