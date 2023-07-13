import { BehaviorSubject, tap } from 'rxjs';

import { IUser } from 'src/app/interfaces/User';
import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _loggedUser$ = new BehaviorSubject<IUser | null>(null);
  loggedUser$ = this._loggedUser$.asObservable();

  constructor(private userService: UserService) {
    const loggedUser = JSON.parse(localStorage.getItem('[user]') as string);
    this._loggedUser$.next(loggedUser as IUser);
  }

  login(email: string, password: string) {
    return this.userService.loginUser(email, password).pipe(
      tap((response) => {
        this.setLocalUser(response);
      })
    );
  }

  register(username: string, email: string, password: string) {
    return this.userService.registerUser(username, email, password).pipe(
      tap((response) => {
        this.setLocalUser(response);
      })
    );
  }

  logout() {
    this._loggedUser$.next(null);
    this.userService.logout();
  }

  setLocalUser(user: IUser) {
    this._loggedUser$.next(user);
    localStorage.setItem('[user]', JSON.stringify(user));
  }
}
