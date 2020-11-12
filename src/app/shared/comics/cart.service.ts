import { Injectable } from '@angular/core';
import { SharedServiceModule } from '../shared-service.module';
import { ComicModel } from './comic.model';

@Injectable({
    providedIn: SharedServiceModule
})
export class CartService {
    comics = [
        {
            date: '1990-11-14',
            id: 197814,
            name: "L'Héritier",
            volumeId: 31638,
            imageUrl: '1812641-couv_212.jpg',
            description:
                'After the death of Nerio Winch are trying to kill them. Will Largo escape them...?'
        },
        {
            date: '1991-09-11',
            id: 198009,
            name: 'Le Groupe W',
            volumeId: 31638,
            imageUrl: '1812656-couv_213.jpg',
            description:
                'Largo Winczlav narrowly escapes. Will largo find out who he is before he strikes again and takes over the empire?'
        }
    ];

    getComics(): Array<ComicModel> {
        return this.comics;
    }
}
