import { IReview } from '../interfaces/Review';
import Review from '../models/Review';

export const getReviewByRecipeId = async (recipeId: string) =>
  Review.find({ recipe: recipeId }).sort({ rating: -1 }).populate('User', ['username', 'email']).exec();

export const getReviewByUserId = async (userId: string) => Review.find({ user: userId });

export const addReview = async (review: IReview, userId: string, recipeId: string) => {
  const newReview = new Review({ ...review, user: userId, recipe: recipeId });
  return newReview.save();
};

export const deleteReview = async (reviewId: string) => Review.findByIdAndDelete(reviewId);

export const updateReview = async (reviewId: string, review: IReview) =>
  Review.findByIdAndUpdate(reviewId, review, {
    new: true,
    runValidators: true,
  });
