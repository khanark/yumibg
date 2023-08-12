import { IUser } from './User';

export interface IRecipe {
  name: string;
  description: string;
  ingredients: string[];
  steps: string[];
  image: string;
  owner: string | IUser;
  savedByUserData: {
    count: number;
    savedUsers: string[];
  };
}
