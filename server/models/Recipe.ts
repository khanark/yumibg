import { Schema, model } from 'mongoose';

import { IRecipe } from '../interfaces/Recipe';

const RecipeSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
			lowercase: true,
			minLength: 3,
		},
		description: {
			type: String,
			required: true,
			minLength: 10,
		},
		cookTime: {
			type: Number,
			required: true,
		},
		ingredients: {
			type: [String],
			required: true,
			default: [],
		},
		steps: {
			type: [String],
			required: true,
			default: [],
		},
		image: {
			type: String,
			required: true,
		},
		dishType: {
			type: String,
			required: true,
		},
		owner: {
			required: true,
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
	},
	{ timestamps: true }
);

export default model<IRecipe>('Recipe', RecipeSchema);
