import { IRecipe } from '../interfaces/Recipe';
import Recipe from '../models/Recipe';
import { SortOrder } from 'mongoose';
import User from '../models/User';

const getRecipes = async (query: any) => {
	let res = Recipe.find().sort({ createdAt: '-1' } as any);

	if (query.dishType) {
		res = res.where({ dishType: query.dishType });
	}

	if (query.order) {
		const order: string = query.order === 'newest' ? 'desc' : 'asc';
		res = res.sort({ createdAt: order as SortOrder });
	}

	return res;
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

const saveUserRecipe = async (recipeId: string, userId: string) =>
	Recipe.findByIdAndUpdate(recipeId, { $push: { savedForLater: userId } }, { new: true, runValidators: true });

export { getRecipes, getRecipe, createRecipe, updateRecipe, deleteRecipe, getRecipesByUserId, saveUserRecipe };
