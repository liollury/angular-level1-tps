import { Component } from '@angular/core';

import { ComicModel } from './model/comic.model';

@Component({
  selector   : 'comics-root',
  templateUrl: './app.component.html',
  styleUrls  : ['./app.component.scss']
})
export class AppComponent {
  comic: ComicModel = {
    date       : '1990-11-14',
    id         : 197814,
    name       : 'Les gouttes de dieu',
    volumeId   : 31638,
    imageUrl   : '1812641-couv_212.jpg',
    description: `After the death of Nerio Winch, Largos adopted fatherm a conspiriacy is set in motion to
      eliminate Largo and prevent him from taking over the empire.Largo is incarcerated in a prison in istanbul
      after being framed for murder and meets the lovable thief Simon Ovronnaz and they become friends.
      They escape and the turkish police force (who are trying to cover up the mistake they've made) are trying to kill them.
      Will Largo escape them...?`
  };

  uppercase(text: string): string {
    return text.toUpperCase();
  }

  handleInput(event) {
    this.comic.name = event.target.value;
  }

}
