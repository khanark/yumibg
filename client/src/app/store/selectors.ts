import { AppStateInterface } from "../types/AppState.interface";
import { createSelector } from "@ngrx/store";

export const selectFeature = (state: AppStateInterface) => state.recipes

export const isLoadingSelector = createSelector(selectFeature, (state) => state.isLoading)
export const recipesSelector = createSelector(selectFeature, (state) => state.recipes)
export const errorSelector = createSelector(selectFeature, (state) => state.error)