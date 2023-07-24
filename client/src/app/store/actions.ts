import { createAction, props } from "@ngrx/store";

import { IRecipe } from "../interfaces/Recipe";

export const getRecipes = createAction("[Recipes] Get Recipes")
export const getRecipesSuccess = createAction("[Recipes] Get Recipes success", props<{recipes: IRecipe[]}>())
export const getRecipesFailure = createAction("[Recipes] Get Recipes", props<{error: string}>())