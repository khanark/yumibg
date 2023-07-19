import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconsModule } from 'src/app/icons/icons.module';
import { NgModule } from '@angular/core';
import { RecipesHeaderComponent } from './recipes-header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RecipesHeaderComponent],
  imports: [CommonModule, IconsModule, FontAwesomeModule, RouterModule],
  exports: [RecipesHeaderComponent],
})
export class RecipesHeaderModule {}
