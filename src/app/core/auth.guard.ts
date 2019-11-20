import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { CoreServiceModule } from './core-service.module';

@Injectable({
  providedIn: CoreServiceModule
})
export class AuthGuard implements CanActivate {
  private isAuthorized = true;

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.isAuthorized) {
      alert('Javascript 2001');
    }

    return this.isAuthorized;
  }

}
