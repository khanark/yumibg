import { AuthHttpErrorComponent } from './auth-http-error/auth-http-error.component';
import { CommonModule } from '@angular/common';
import { ComponentNavigationComponent } from './component-navigation/component-navigation.component';
import { CustomTitleCasePipe } from './pipes/custom-title-case.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconsModule } from '../icons/icons.module';
import { LoaderComponent } from './loader/loader.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    ComponentNavigationComponent,
    LoaderComponent,
    AuthHttpErrorComponent,
    CustomTitleCasePipe,
  ],
  imports: [CommonModule, IconsModule, FontAwesomeModule],
  exports: [
    ComponentNavigationComponent,
    LoaderComponent,
    AuthHttpErrorComponent,
    CustomTitleCasePipe,
  ],
})
export class SharedModule {}
