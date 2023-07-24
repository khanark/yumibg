import { CommonModule } from '@angular/common';
import { CreateRecipeComponent } from './create-recipe.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { IconsModule } from 'src/app/icons/icons.module';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CreateRecipeComponent],
  imports: [
    CommonModule,
    FormsModule,
    IconsModule,
    FontAwesomeModule,
    SharedModule,
  ],
  exports: [CreateRecipeComponent],
})
export class CreateRecipeModule {}
