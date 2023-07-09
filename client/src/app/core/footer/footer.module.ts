import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer.component';
import { IconsModule } from 'src/app/icons/icons.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, FontAwesomeModule, IconsModule, RouterModule],
  exports: [FooterComponent],
})
export class FooterModule {}
