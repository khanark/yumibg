import { RouterModule, Routes } from '@angular/router';

import { CreateRecipeComponent } from './recipes-main/create-recipe/create-recipe.component';
import { NgModule } from '@angular/core';
import { RecipesComponent } from './recipes.component';
import { UserDetailsComponent } from './recipes-main/user-details/user-details.component';
import { UserResolverService } from 'src/app/services/resolvers/user-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: RecipesComponent,
    title: 'Recipes',
    children: [
      {
        path: 'users/:id',
        title: 'User',
        component: UserDetailsComponent,
        resolve: {
          user: UserResolverService,
        },
      },
      {
        path: 'create',
        title: 'Create Recipe',
        component: CreateRecipeComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipesRoutingModule {}
