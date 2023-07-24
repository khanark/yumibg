import { AuthHttpErrorComponent } from './auth-http-error/auth-http-error.component';
import { BackButtonComponent } from './back-button/back-button.component';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconsModule } from '../icons/icons.module';
import { LoaderComponent } from './loader/loader.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    BackButtonComponent,
    LoaderComponent,
    AuthHttpErrorComponent,
    AuthHttpErrorComponent,
  ],
  imports: [CommonModule, IconsModule, FontAwesomeModule],
  exports: [BackButtonComponent, LoaderComponent, AuthHttpErrorComponent],
})
export class SharedModule {}
