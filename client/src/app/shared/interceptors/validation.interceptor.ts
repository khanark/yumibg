import {
  HTTP_INTERCEPTORS,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, Provider } from '@angular/core';

import { AuthService } from 'src/app/services/auth/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ValidationInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.authService.loggedUser?.token;

    if (token) {
      const authReq = req.clone({
        setHeaders: {
          'x-auth-token': token,
          'content-type': 'application/json',
        },
      });

      return next.handle(authReq);
    }

    return next.handle(req);
  }
}

export const validationInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ValidationInterceptor,
  multi: true,
};
