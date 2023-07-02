"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const RecipeSchema = new mongoose_1.Schema({
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
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
    },
});
exports.default = (0, mongoose_1.model)('Recipe', RecipeSchema);
