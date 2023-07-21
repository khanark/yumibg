import { Schema, model } from 'mongoose';

import { IRecipe } from '../interfaces/Recipe';

const RecipeSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minLength: 3,
  },
  description: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    minLength: 10,
  },
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Review',
    },
  ],
  savedForLater: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  ingredients: [
    {
      name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
      },
      quantity: {
        type: Number,
        required: true,
        trim: true,
        lowercase: true,
      },
      unit: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
      },
    },
  ],
  steps: [
    {
      description: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
      },
      duration: {
        type: Number,
        required: true,
        trim: true,
        lowercase: true,
      },
    },
  ],
  image: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  owner: {
    reqired: true,
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

export default model<IRecipe>('Recipe', RecipeSchema);
