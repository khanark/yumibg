import { AuthService } from 'src/app/services/auth/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-auth-http-error',
  templateUrl: './auth-http-error.component.html',
  styleUrls: ['./auth-http-error.component.css'],
})
export class AuthHttpErrorComponent {
  constructor(public authService: AuthService) {}
}
