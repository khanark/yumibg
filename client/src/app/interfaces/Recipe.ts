
export interface IRecipe {
  _id: string;
  name: string;
  description: string;
  ingredients: string[];
  steps: string[];
  image: string;
  owner: any;
  cookTime: number;
  dishType: string;
  createdAt: string;
}
