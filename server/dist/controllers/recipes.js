"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const recipeService = __importStar(require("../services/recipe.service"));
const express_1 = require("express");
// TODO: Add authenticate middleware to routes that require authentication
const recipesRouter = (0, express_1.Router)();
// return all recipes
recipesRouter.get('/', (_req, res) => {
    recipeService
        .getRecipes()
        .then((recipes) => res.json(recipes))
        .catch((err) => res.status(500).json({ error: err }));
});
// return a single recipe
recipesRouter.get('/:id', (req, res) => {
    recipeService
        .getRecipe(req.params.id)
        .then((recipe) => res.json(recipe))
        .catch((err) => res.status(500).json({ error: err }));
});
// create a new recipe
recipesRouter.post('/', (req, res) => {
    recipeService
        .createRecipe(req.body)
        .then((recipe) => res.json(recipe))
        .catch((err) => res.status(500).json({ error: err }));
});
// update a recipe
recipesRouter.patch('/:id', (req, res) => {
    recipeService
        .updateRecipe(req.params.id, req.body)
        .then((recipe) => res.json(recipe))
        .catch((err) => res.status(500).json({ error: err }));
});
// delete a recipe
recipesRouter.delete('/:id', (req, res) => {
    recipeService
        .deleteRecipe(req.params.id)
        .then((recipe) => res.json(recipe))
        .catch((err) => res.status(500).json({ error: err }));
});
exports.default = recipesRouter;
