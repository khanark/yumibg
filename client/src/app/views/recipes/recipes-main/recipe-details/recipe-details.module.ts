import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconsModule } from 'src/app/icons/icons.module';
import { NgModule } from '@angular/core';
import { RecipeDetailsComponent } from './recipe-details.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [RecipeDetailsComponent],
  imports: [
    CommonModule,
    IconsModule,
    FontAwesomeModule,
    RouterModule,
    SharedModule,
  ],
  exports: [RecipeDetailsComponent],
})
export class RecipeDetailsModule {}
