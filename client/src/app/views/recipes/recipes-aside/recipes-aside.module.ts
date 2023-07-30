import { CommonModule } from '@angular/common';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { IconsModule } from 'src/app/icons/icons.module';
import { NgModule } from '@angular/core';
import { RecipesAsideComponent } from './recipes-aside.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RecipesAsideComponent],
  imports: [
    CommonModule,
    IconsModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule,
    DirectivesModule,
  ],
  exports: [RecipesAsideComponent],
})
export class RecipesAsideModule {}
