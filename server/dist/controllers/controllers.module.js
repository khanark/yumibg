"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.recipeRouter = exports.userRouter = void 0;
const recipes_1 = __importDefault(require("./recipes"));
exports.recipeRouter = recipes_1.default;
const user_1 = __importDefault(require("./user"));
exports.userRouter = user_1.default;
