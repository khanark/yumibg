import { CommonModule } from '@angular/common';
import { CreateRecipeModule } from './recipes-main/create-recipe/create-recipe.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { IconsModule } from 'src/app/icons/icons.module';
import { NgModule } from '@angular/core';
import { RecipeDetailsComponent } from './recipes-main/recipe-details/recipe-details.component';
import { RecipeDetailsModule } from './recipes-main/recipe-details/recipe-details.module';
import { RecipesAsideModule } from './recipes-aside/recipes-aside.module';
import { RecipesCatalogModule } from './recipes-main/recipes-catalog/recipes-catalog.module';
import { RecipesComponent } from './recipes.component';
import { RecipesHeaderModule } from './recipes-header/recipes-header.module';
import { RecipesRoutingModule } from './recipes-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserDetailsModule } from './recipes-main/user-details/user-details.module';

@NgModule({
  declarations: [RecipesComponent],
  imports: [
    CommonModule,
    RecipesRoutingModule,
    IconsModule,
    FontAwesomeModule,
    RouterModule,
    FormsModule,
    RecipesHeaderModule,
    RecipesAsideModule,
    CreateRecipeModule,
    RecipesCatalogModule,
    SharedModule,
    UserDetailsModule,
    RecipeDetailsModule,
  ],
  exports: [RecipesComponent],
})
export class RecipesModule {}
