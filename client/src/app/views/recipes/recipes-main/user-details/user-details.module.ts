import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserDetailsComponent } from './user-details.component';

@NgModule({
  declarations: [UserDetailsComponent],
  imports: [CommonModule],
  exports: [UserDetailsComponent],
})
export class UserDetailsModule {}
