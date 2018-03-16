import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { StoreComponent } from './store.component';

@Injectable()
export class StoreFirstGuard implements CanActivate {
  private firstNavigation = true;
  constructor(private router: Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
    if(this.firstNavigation) {
      this.firstNavigation = false;
      if(route.component != StoreComponent) {
        this.router.navigateByUrl('/');
        return false;
      }
    }
      return true;
    }
}
