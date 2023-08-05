import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { CreateRecipeComponent } from './recipes-main/create-recipe/create-recipe.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconsModule } from 'src/app/icons/icons.module';
import { NgModule } from '@angular/core';
import { RecipeDetailsComponent } from './recipes-main/recipe-details/recipe-details.component';
import { RecipesAsideComponent } from './recipes-aside/recipes-aside.component';
import { RecipesCatalogComponent } from './recipes-main/recipes-catalog/recipes-catalog.component';
import { RecipesComponent } from './recipes.component';
import { RecipesHeaderComponent } from './recipes-header/recipes-header.component';
import { RecipesRoutingModule } from './recipes-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { SingleRecipeComponent } from './recipes-main/recipes-catalog/single-recipe/single-recipe.component';
import { UserDetailsComponent } from './recipes-main/user-details/user-details.component';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipesAsideComponent,
    RecipesHeaderComponent,
    RecipeDetailsComponent,
    UserDetailsComponent,
    RecipesCatalogComponent,
    CreateRecipeComponent,
    SingleRecipeComponent,
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule,
    IconsModule,
    FontAwesomeModule,
    RouterModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  exports: [RecipesComponent],
})
export class RecipesModule {}
