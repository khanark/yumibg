import { AuthService } from 'src/app/services/auth/auth.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  isLoading: boolean = false;

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.isLoading = true;

    const formValues: { email: string; password: string } = form.value;

    this.authService
      .login(formValues.email, formValues.password)
      .subscribe(() => {
        this.isLoading = false;
        this.router.navigate(['/']);
      });
  }
}
