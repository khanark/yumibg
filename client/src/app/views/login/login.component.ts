import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  passwordEye: boolean = false;

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.resetHttpError();
  }

  formGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  onSubmit(): void {
    if (this.formGroup.invalid) return;

    const { email, password } = this.formGroup.value as {
      email: string;
      password: string;
    };

    this.authService
      .login(email, password)
      .pipe(finalize(() => this.formGroup.reset()))
      .subscribe(() => this.router.navigate(['/recipes']));
  }

  togglePasswordEye(): void {
    this.passwordEye = !this.passwordEye;
  }
}
