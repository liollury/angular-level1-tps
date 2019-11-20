import { Component } from '@angular/core';

import { ComicModel } from './model/comic.model';

import { comics } from './comics.data';

@Component({
    selector: 'comics-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    comics: ComicModel[] = comics;
}
