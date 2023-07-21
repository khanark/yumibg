import { AuthService } from 'src/app/services/auth/auth.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  isLoading: boolean = false;
  httpErrorMessage: string = '';
  passwordEye: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    this.isLoading = true;

    const formValues: { email: string; password: string } = form.value;

    this.authService
      .login(formValues.email, formValues.password)
      .pipe(
        finalize(() => {
          this.isLoading = false;
          form.reset();
        })
      )
      .subscribe({
        next: () => this.router.navigate(['/recipes']),
        error: () => (this.httpErrorMessage = 'Wrong email or password'),
      });
  }

  togglePasswordEye(): void {
    this.passwordEye = !this.passwordEye;
  }
}
