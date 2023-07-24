import { IRecipe } from "./Recipe";

export interface RecipeState {
    isLoading: boolean;
    recipes: IRecipe[];
    error: string | null
}