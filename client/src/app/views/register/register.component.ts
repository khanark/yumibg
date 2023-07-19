import { FormBuilder, Validators } from '@angular/forms';

import { AuthService } from 'src/app/services/auth/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { matchPasswordValidator } from 'src/app/shared/validators/match-password-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  // register form group
  registerForm = this.fb.group({
    username: ['', [Validators.minLength(4), Validators.required]],
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.minLength(6), Validators.required]],
    repeatPassword: [
      '',
      [
        Validators.required,
        matchPasswordValidator('password', 'repeatPassword'),
      ],
    ],
  });

  isLoading: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  onSubmit(): void {
    if (this.registerForm.invalid) {
      return;
    }

    this.isLoading = true;

    const { username, email, password } = this.registerForm.value as {
      username: string;
      email: string;
      password: string;
    };

    this.authService.register(username, email, password).subscribe(() => {
      this.isLoading = false;
      this.router.navigate(['/recipes']);
    });
  }
}
