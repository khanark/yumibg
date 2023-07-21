import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconsModule } from 'src/app/icons/icons.module';
import { LoaderModule } from 'src/app/shared/loader/loader.module';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './register.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    IconsModule,
    FormsModule,
    ReactiveFormsModule,
    LoaderModule,
  ],
  exports: [RegisterComponent],
})
export class RegisterModule {}
