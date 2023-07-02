import { IRecipe } from '../interfaces/Recipe';
import Recipe from '../models/Recipe';

const getRecipes = async () => {
  return await Recipe.find();
};

const getRecipe = async (id: string) => {
  const existingRecipe = await Recipe.findById(id);

  if (!existingRecipe) {
    throw new Error('Recipe not found');
  }

  return existingRecipe;
};

const createRecipe = async (recipe: IRecipe) => {
  const newRecipe = new Recipe(recipe);
  return await newRecipe.save();
};

const updateRecipe = async (id: string, recipe: IRecipe) => {
  const existingRecipe = await Recipe.findById(id);

  if (!existingRecipe) {
    throw new Error('Recipe not found');
  }

  return await Recipe.findByIdAndUpdate(id, recipe, {
    runValidators: true,
    new: true,
  });
};

const deleteRecipe = async (id: string) => {
  const existingRecipe = await Recipe.findById(id);

  if (!existingRecipe) {
    throw new Error('Recipe not found');
  }

  return await Recipe.findByIdAndRemove(id);
};

export { getRecipes, getRecipe, createRecipe, updateRecipe, deleteRecipe };
