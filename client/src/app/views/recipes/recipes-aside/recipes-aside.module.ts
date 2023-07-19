import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { IconsModule } from 'src/app/icons/icons.module';
import { NgModule } from '@angular/core';
import { RecipesAsideComponent } from './recipes-aside.component';

@NgModule({
  declarations: [RecipesAsideComponent],
  imports: [CommonModule, IconsModule, FontAwesomeModule, FormsModule],
  exports: [RecipesAsideComponent],
})
export class RecipesAsideModule {}
