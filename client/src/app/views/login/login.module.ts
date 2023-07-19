import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { IconsModule } from 'src/app/icons/icons.module';
import { LoaderModule } from 'src/app/shared/loader/loader.module';
import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    IconsModule,
    RouterModule,
    LoaderModule,
  ],
  exports: [LoginComponent],
})
export class LoginModule {}
