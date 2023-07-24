import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { AuthService } from 'src/app/services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, OnDestroy {
  subscription: Subscription | undefined;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    let isAuth: boolean = false;
    this.subscription = this.authService.loggedUser$.subscribe((user) => {
      isAuth = !!user;
    });
    if (isAuth) {
      return true;
    }
    return this.router.createUrlTree(['/login']);
  }
}
