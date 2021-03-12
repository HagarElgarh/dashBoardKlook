import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthSignService } from './auth-sign.service';

@Injectable({
  providedIn: 'root'
})
export class GuardAuthService implements  CanActivate {

  constructor(private auth:AuthSignService,private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    if (this.auth.userLogin) {
      this.router.navigate(['/sign'])

      return false;
    } else {
      return true;

    }

  }
}