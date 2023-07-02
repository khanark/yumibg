"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        lowrcase: true,
        minlength: 6,
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        minlength: 2,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        minlength: 2,
    },
});
exports.User = (0, mongoose_1.model)('User', userSchema);
