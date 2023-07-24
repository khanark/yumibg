import { CommonModule } from '@angular/common';
import { CreateRecipeComponent } from './create-recipe.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [CreateRecipeComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [CreateRecipeComponent],
})
export class CreateRecipeModule {}
