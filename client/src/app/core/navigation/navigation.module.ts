import { CommonModule } from '@angular/common';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconsModule } from 'src/app/icons/icons.module';
import { NavigationComponent } from './navigation.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavigationComponent],
  imports: [
    CommonModule,
    RouterModule,
    IconsModule,
    FontAwesomeModule,
    DirectivesModule,
  ],
  exports: [NavigationComponent],
})
export class NavigationModule {}
