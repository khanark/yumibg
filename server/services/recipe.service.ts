import { IRecipe } from '../interfaces/Recipe';
import Recipe from '../models/Recipe';
import { SortOrder } from 'mongoose';
import User from '../models/User';

const composeOrderQuery = (orderQuery: any) => {
  let order: any = '';

  switch (orderQuery) {
    case 'newest':
      order = { createdAt: '-1' };
      break;
    case 'oldest':
      order = { createdAt: '1' };
      break;
    case 'popular':
      order = { timesSaved: '-1' };
      break;
    default:
      order = { createdAt: '-1' };
  }

  return order;
};

const getRecipes = async (query: any) => {
  let filter = {};
  const sortOrder: any = {};

  if (query.dishType) {
    filter = { ...filter, dishType: query.dishType };
  }

  if (query.order) {
    switch (query.order) {
      case 'newest':
        sortOrder.createdAt = -1;
        break;
      case 'oldest':
        sortOrder.createdAt = 1;
        break;
      case 'popular':
        sortOrder['savedByUserData.count'] = -1;
        break;
    }
  }

  if (!query.order) {
    sortOrder.createdAt = -1;
  }

  if (query.search) {
    filter = { ...filter, name: { $regex: new RegExp(query.search, 'i') } };
  }

  return await Recipe.find(filter).sort(sortOrder);
};

const getRecipesByUserId = async (userId: string) => Recipe.find({ owner: userId });

const getRecipe = async (id: string) => Recipe.findById(id).populate('owner');

const createRecipe = async (recipe: IRecipe) => {
  const newRecipe = new Recipe(recipe);
  const user = await User.findById(recipe.owner);

  if (!user) {
    return;
  }

  user.createdRecipes.push(String(newRecipe._id));

  await newRecipe.save();
  await user.save();
  return newRecipe;
};

const updateRecipe = async (id: string, recipe: IRecipe) =>
  Recipe.findByIdAndUpdate(id, recipe, { new: true, runValidators: true });

const deleteRecipe = async (id: string) => Recipe.findByIdAndDelete(id, { new: true });

// NOTE: I don't think I need this one.

// const saveUserRecipe = async (recipeId: string, userId: string) =>
// 	Recipe.findByIdAndUpdate(recipeId, { $push: { savedForLater: userId } }, { new: true, runValidators: true });

export { getRecipes, getRecipe, createRecipe, updateRecipe, deleteRecipe, getRecipesByUserId };
