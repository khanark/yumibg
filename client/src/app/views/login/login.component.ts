import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { finalize, tap } from 'rxjs';

import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  passwordEye: boolean = false;
  formGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    public authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.authService.resetHttpError();
  }

  onSubmit(): void {
    if (this.formGroup.invalid) return;

    const { email, password } = this.formGroup.value as {
      email: string;
      password: string;
    };

    this.authService
      .login(email, password)
      .subscribe(() => this.router.navigate(['/recipes/catalog']));

    this.formGroup.reset();
  }

  togglePasswordEye(): void {
    this.passwordEye = !this.passwordEye;
  }
}
