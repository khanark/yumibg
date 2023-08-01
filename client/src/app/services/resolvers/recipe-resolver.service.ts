import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';

import { IRecipe } from 'src/app/interfaces/Recipe';
import { RecipeService } from '../recipe/recipe.service';
import { inject } from '@angular/core';

// Resolve is depricated, instead use the ResolveFn (from Angular docs)
export const recipeResolver: ResolveFn<IRecipe> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return inject(RecipeService).getSingleRecipe(
    route.paramMap.get('id') as string
  );
};
