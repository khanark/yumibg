import { ClickOutsideDirective } from 'src/app/directives/clickOutside.directive';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconsModule } from 'src/app/icons/icons.module';
import { NavigationComponent } from './navigation.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavigationComponent, ClickOutsideDirective],
  imports: [CommonModule, RouterModule, IconsModule, FontAwesomeModule],
  exports: [NavigationComponent],
})
export class NavigationModule {}
