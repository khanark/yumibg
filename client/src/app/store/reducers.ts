import * as RecipesActions from "./actions"

import { createReducer, on } from "@ngrx/store"

import { RecipeState } from "../interfaces/RecipeState"

export const initialState: RecipeState = {
    isLoading: false,
    recipes: [],
    error: null
} 

export const reducers = createReducer(initialState,
    on(RecipesActions.getRecipes, (state) => ({
    ...state,
    isLoading: true,
})),
    on(RecipesActions.getRecipesSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    recipes: action.recipes
})),
    on(RecipesActions.getRecipesFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error
})),
)