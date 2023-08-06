import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconsModule } from 'src/app/icons/icons.module';
import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    IconsModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  exports: [LoginComponent],
})
export class LoginModule {}
