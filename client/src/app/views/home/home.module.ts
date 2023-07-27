import { CommonModule } from '@angular/common';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home.component';
import { IconsModule } from 'src/app/icons/icons.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    IconsModule,
    RouterModule,
    DirectivesModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
