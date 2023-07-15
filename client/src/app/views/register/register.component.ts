import { AuthService } from 'src/app/services/auth/auth.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private authService: AuthService, private router: Router) {}

  isLoading: boolean = false;

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.isLoading = true;

    const formValues: { username: string; email: string; password: string } =
      form.value;

    this.authService
      .register(formValues.username, formValues.email, formValues.password)
      .subscribe(() => {
        this.isLoading = false;
        this.router.navigate(['/recipes']);
      });
  }
}
