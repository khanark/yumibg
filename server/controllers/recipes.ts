import * as recipeService from '../services/recipe.service';

import express, { Router } from 'express';

import { authenticate } from './../middlewares/authenticate';

const recipesRouter: Router = Router();

// return all recipes
recipesRouter.get('/', (_req, res) => {
	recipeService
		.getRecipes(_req.query)
		.then((recipes) => res.status(200).json(recipes))
		.catch((err) => res.status(500).json({ error: err }));
});

// return a single recipe
recipesRouter.get('/:id', (req, res) => {
	recipeService
		.getRecipe(req.params.id)
		.then((recipe) => res.status(200).json(recipe))
		.catch((err) => res.status(500).json({ error: err }));
});

// create a new recipe
recipesRouter.post('/', authenticate(), (req, res) => {
	recipeService
		.createRecipe(req.body)
		.then((recipe) => res.status(200).json(recipe))
		.catch((err) => res.status(500).json({ error: err }));
});

// update a recipe
recipesRouter.patch('/:id', authenticate(), (req, res) => {
	recipeService
		.updateRecipe(req.params.id, req.body)
		.then((recipe) => res.status(200).json(recipe))
		.catch((err) => res.status(500).json({ error: err }));
});

// delete a recipe
recipesRouter.delete('/:id', authenticate(), (req, res) => {
	recipeService
		.deleteRecipe(req.params.id)
		.then((recipe) => res.status(200).json(recipe))
		.catch((err) => res.status(500).json({ error: err }));
});

export default recipesRouter;
