import { HttpClient } from '@angular/common/http';
import { IUser } from 'src/app/interfaces/User';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  loginUser(email: string, password: string): Observable<IUser> {
    return this.http.post<IUser>(`${environment.API_URL}users/login`, {
      email,
      password,
    });
  }

  registerUser(
    username: string,
    email: string,
    password: string
  ): Observable<IUser> {
    return this.http.post<IUser>(`${environment.API_URL}users/register`, {
      username,
      email,
      password,
    });
  }

  logout() {
    localStorage.removeItem('[user]');
  }

  getSingleUser(id: string): Observable<IUser> {
    return this.http.get<IUser>(`${environment.API_URL}users/${id}`);
  }

  updateUser(id: string, user: IUser): Observable<IUser> {
    return this.http.patch<IUser>(`${environment.API_URL}users/${id}`, user);
  }
}
