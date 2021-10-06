import { Component } from '@angular/core';
import { comics } from './comics.data';
import { ComicModel } from './model/comic.model';

@Component({
  selector: 'comics-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  comics: ComicModel[] = comics;
}
