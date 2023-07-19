import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';

import { AuthService } from 'src/app/services/auth/auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ValidationInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.authService.getLocalUser().token;

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

export const validationInterceptorProvider = {
  provide: 'HTTP_INTERCEPTORS',
  useClass: ValidationInterceptor,
  multi: true,
};
