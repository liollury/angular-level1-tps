import { Injectable } from '@angular/core';

import { CoreServiceModule } from '../core-service.module';
import { UserModel } from './user.model';

@Injectable({
  providedIn: CoreServiceModule
})
export class UserService {

  get connectedUser (): UserModel {
    return {
      firstName: 'Astérix',
      lastName: 'Le Gaulois'
    }
  }

}
