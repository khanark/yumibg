import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconsModule } from 'src/app/icons/icons.module';
import { NgModule } from '@angular/core';
import { OnInputFocusDirective } from 'src/app/directives/on-input-focus.directive';
import { RegisterComponent } from './register.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    IconsModule,
    SharedModule,
  ],
  exports: [RegisterComponent],
})
export class RegisterModule {}
