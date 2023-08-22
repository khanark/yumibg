import { AuthHttpErrorComponent } from './auth-http-error/auth-http-error.component';
import { CommonModule } from '@angular/common';
import { ComponentNavigationComponent } from './component-navigation/component-navigation.component';
import { CookTimePipe } from './pipes/cookTime.pipe';
import { CustomTitleCasePipe } from './pipes/custom-title-case.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconsModule } from '../icons/icons.module';
import { InputComponent } from './input/input.component';
import { LoaderComponent } from './loader/loader.component';
import { NgModule } from '@angular/core';
import { PaginationComponent } from './pagination/pagination.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ComponentNavigationComponent,
    LoaderComponent,
    AuthHttpErrorComponent,
    CustomTitleCasePipe,
    CookTimePipe,
    InputComponent,
    PaginationComponent,
  ],
  imports: [CommonModule, IconsModule, FontAwesomeModule, ReactiveFormsModule],
  exports: [
    ComponentNavigationComponent,
    LoaderComponent,
    AuthHttpErrorComponent,
    CustomTitleCasePipe,
    InputComponent,
    CookTimePipe,
    PaginationComponent,
  ],
})
export class SharedModule {}
