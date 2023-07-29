import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconsModule } from 'src/app/icons/icons.module';
import { NgModule } from '@angular/core';
import { RecipesCatalogComponent } from './recipes-catalog.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [RecipesCatalogComponent],
  imports: [CommonModule, SharedModule, IconsModule, FontAwesomeModule],
  exports: [RecipesCatalogComponent],
})
export class RecipesCatalogModule {}
