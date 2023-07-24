import { Schema, model } from 'mongoose';

import { IRecipe } from '../interfaces/Recipe';

const RecipeSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    minLength: 3,
  },
  description: {
    type: String,
    required: true,
    minLength: 10,
  },
  timeNumber: {
    type: Number,
    required: true,
  },
  timeUnits: {
    type: String,
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
  owner: {
    required: true,
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

export default model<IRecipe>('Recipe', RecipeSchema);
