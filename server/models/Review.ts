import { Schema, model } from 'mongoose';

import { IReview } from '../interfaces/Review';

const reviewSchema = new Schema({
	rating: {
		type: Number,
		required: true,
		min: 1,
		max: 5,
	},
	description: {
		type: String,
		required: true,
		trim: true,
		lowercase: true,
		minLength: 10,
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
	recipe: {
		type: Schema.Types.ObjectId,
		ref: 'Recipe',
	},
});

export default model<IReview>('Review', reviewSchema);
