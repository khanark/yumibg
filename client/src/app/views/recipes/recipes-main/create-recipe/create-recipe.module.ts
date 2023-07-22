import { CommonModule } from '@angular/common';
import { CreateRecipeComponent } from './create-recipe.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [CreateRecipeComponent],
  imports: [CommonModule],
  exports: [CreateRecipeComponent],
})
export class CreateRecipeModule {}
