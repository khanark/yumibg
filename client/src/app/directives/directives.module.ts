import { ClickOutsideDirective } from './clickOutside.directive';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [ClickOutsideDirective],
  imports: [CommonModule],
  exports: [ClickOutsideDirective],
})
export class DirectivesModule {}
