import { Injectable } from '@angular/core';
import { CoreServiceModule } from '../core-service.module';
import { UserModel } from './user.model';

@Injectable({
  providedIn: CoreServiceModule
})
export class UserService {
  private readonly user: UserModel = new UserModel('Asterix', 'Le gaulois');

  constructor() { }

  public getUser(): UserModel {
    return this.user;
  }
}
