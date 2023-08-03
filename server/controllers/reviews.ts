import * as reviewsService from '../services/review.service';

import express, { Router } from 'express';

// TODO: Add authenticate middleware to routes that require authentication
// TODO: Finish implementing routes

const reviewsRouter: Router = Router();

reviewsRouter.get('/:recipeId', (req, res) => {
	reviewsService
		.getReviewByRecipeId(req.params.recipeId)
		.then((reviews) => res.json(reviews))
		.catch((err) => res.status(500).json({ error: err }));
});
