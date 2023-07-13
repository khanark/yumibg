import { HttpClient } from '@angular/common/http';
import { IUser } from 'src/app/interfaces/User';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  baseUrl: string = 'http://localhost:8000/api/users';

  endpoints: {
    login: string;
    register: string;
    single: (id: string) => string;
  } = {
    login: this.baseUrl + '/login',
    register: this.baseUrl + '/register',
    single: (id: string) => this.baseUrl + '/' + id,
  };

  loginUser(email: string, password: string): Observable<IUser> {
    return this.http.post<IUser>(this.endpoints.login, {
      email,
      password,
    });
  }

  registerUser(
    username: string,
    email: string,
    password: string
  ): Observable<IUser> {
    return this.http.post<IUser>(this.endpoints.register, {
      username,
      email,
      password,
    });
  }

  logout() {
    localStorage.removeItem('[user]');
  }

  getSingleUser(id: string): Observable<IUser> {
    return this.http.get<IUser>(this.endpoints.single(id));
  }

  updateUser(id: string, user: IUser): Observable<IUser> {
    return this.http.patch<IUser>(this.endpoints.single(id), user);
  }
}
