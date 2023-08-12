import { IRecipe } from './Recipe';

export interface IUser {
  _id: string;
  username: string;
  email: string;
  token: string;
  createdRecipes: IRecipe[];
  savedRecipes: IRecipe[];
}
