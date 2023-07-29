import * as recipeService from '../services/recipe.service';

import express, { Router } from 'express';

// TODO: Add authenticate middleware to routes that require authentication

const recipesRouter: Router = Router();

// return all recipes
recipesRouter.get('/', (_req, res) => {
  recipeService
    .getRecipes(_req.query)
    .then(recipes => res.json(recipes))
    .catch(err => res.status(500).json({ error: err }));
});

// return a single recipe
recipesRouter.get('/:id', (req, res) => {
  recipeService
    .getRecipe(req.params.id)
    .then(recipe => res.json(recipe))
    .catch(err => res.status(500).json({ error: err }));
});

// create a new recipe
recipesRouter.post('/', (req, res) => {
  recipeService
    .createRecipe(req.body)
    .then(recipe => res.json(recipe))
    .catch(err => res.status(500).json({ error: err }));
});

// update a recipe
recipesRouter.patch('/:id', (req, res) => {
  recipeService
    .updateRecipe(req.params.id, req.body)
    .then(recipe => res.json(recipe))
    .catch(err => res.status(500).json({ error: err }));
});

// delete a recipe
recipesRouter.delete('/:id', (req, res) => {
  recipeService
    .deleteRecipe(req.params.id)
    .then(recipe => res.json(recipe))
    .catch(err => res.status(500).json({ error: err }));
});

export default recipesRouter;
