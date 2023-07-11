import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OnInputFocusDirective } from '../directives/on-input-focus.directive';

@NgModule({
  declarations: [OnInputFocusDirective],
  imports: [CommonModule],
  exports: [OnInputFocusDirective],
})
export class SharedModule {}
