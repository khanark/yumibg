import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { RecipesCatalogComponent } from './recipes-catalog.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [RecipesCatalogComponent],
  imports: [CommonModule, SharedModule, NgxPaginationModule],
  exports: [RecipesCatalogComponent],
})
export class RecipesCatalogModule {}
