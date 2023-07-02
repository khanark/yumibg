"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRecipe = exports.updateRecipe = exports.createRecipe = exports.getRecipe = exports.getRecipes = void 0;
const Recipe_1 = __importDefault(require("../models/Recipe"));
const getRecipes = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield Recipe_1.default.find();
});
exports.getRecipes = getRecipes;
const getRecipe = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existingRecipe = yield Recipe_1.default.findById(id);
    if (!existingRecipe) {
        throw new Error('Recipe not found');
    }
    return existingRecipe;
});
exports.getRecipe = getRecipe;
const createRecipe = (recipe) => __awaiter(void 0, void 0, void 0, function* () {
    const newRecipe = new Recipe_1.default(recipe);
    return yield newRecipe.save();
});
exports.createRecipe = createRecipe;
const updateRecipe = (id, recipe) => __awaiter(void 0, void 0, void 0, function* () {
    const existingRecipe = yield Recipe_1.default.findById(id);
    if (!existingRecipe) {
        throw new Error('Recipe not found');
    }
    return yield Recipe_1.default.findByIdAndUpdate(id, recipe, {
        runValidators: true,
        new: true,
    });
});
exports.updateRecipe = updateRecipe;
const deleteRecipe = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existingRecipe = yield Recipe_1.default.findById(id);
    if (!existingRecipe) {
        throw new Error('Recipe not found');
    }
    return yield Recipe_1.default.findByIdAndRemove(id);
});
exports.deleteRecipe = deleteRecipe;
