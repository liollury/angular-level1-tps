import { Injectable } from '@angular/core';
import { SharedServiceModule } from '../shared-service.module';
import { ComicModel } from './comic.model';
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



}
