export interface IUser {
  _id?: string;
  username: string;
  email: string;
  password: string;
  createdRecipes: string[];
  savedRecipes: string[];
}
