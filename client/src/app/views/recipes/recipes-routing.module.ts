import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from 'src/app/shared/guards/authGuard.guard';
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
        canActivate: [AuthGuard],
      },
      {
        path: 'create',
        title: 'Create Recipe',
        component: CreateRecipeComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipesRoutingModule {}
