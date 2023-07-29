import { IRecipe } from '../interfaces/Recipe';
import { ObjectId } from 'mongoose';
import Recipe from '../models/Recipe';
import User from '../models/User';

const getRecipes = async (query: any) => {
  const { name, userId } = query;
  const queryObj: any = {};
  if (name) queryObj.name = name;
  if (userId) queryObj.owner = userId;
  return Recipe.find(queryObj);
};

const getRecipesByUserId = async (userId: string) =>
  Recipe.find({ owner: userId });

const getRecipe = async (id: string) => Recipe.findById(id);

const createRecipe = async (recipe: IRecipe) => {
  const newRecipe = new Recipe(recipe);
  const user = await User.findById(recipe.owner);

  if (!user) {
    console.log('There is no user');
    return;
  }

  user.createdRecipes.push(String(newRecipe._id));

  await newRecipe.save();
  await user.save();
};

const updateRecipe = async (id: string, recipe: IRecipe) =>
  Recipe.findByIdAndUpdate(id, recipe, { new: true, runValidators: true });

const deleteRecipe = async (id: string) => Recipe.findByIdAndDelete(id);

const saveUserRecipe = async (recipeId: string, userId: string) =>
  Recipe.findByIdAndUpdate(
    recipeId,
    { $push: { savedForLater: userId } },
    { new: true, runValidators: true }
  );

export {
  getRecipes,
  getRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe,
  getRecipesByUserId,
  saveUserRecipe,
};
