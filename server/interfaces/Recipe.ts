interface Ingredients {
  name: string;
  quantity: number;
  unit: string;
}

interface Steps {
  description: string;
  duration: number;
}

export interface IRecipe {
  name: string;
  description: string;
  ingredients: Ingredients[];
  steps: Steps[];
  image: string;
  owner: string;
}
