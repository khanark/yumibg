import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RecipesCatalogComponent } from './recipes-catalog.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [RecipesCatalogComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [RecipesCatalogComponent]
})
export class RecipesCatalogModule { }
