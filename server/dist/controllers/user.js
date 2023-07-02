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
const userService = __importStar(require("../services/user.service"));
const express_1 = require("express");
const userRouter = (0, express_1.Router)();
// TODO: Add authenticate middleware to routes that require authentication
// register a new user
userRouter.post('/register', (req, res) => {
    userService
        .register(req.body)
        .then((user) => res.json(user))
        .catch((err) => res.status(400).json({ message: err.message }));
});
// login an existing user
userRouter.post('/login', (req, res) => {
    userService
        .login(req.body)
        .then((user) => res.json(user))
        .catch((err) => res.status(400).json({ message: err.message }));
});
// return single user
userRouter.get('/:id', (req, res) => {
    userService
        .getSingleUser(req.params.id)
        .then((user) => res.json(user))
        .catch((err) => res.status(400).json({ message: err.message }));
});
// update a user
userRouter.patch('/:id', (req, res) => {
    userService
        .updateUser(req.params.id, req.body)
        .then((user) => res.json(user))
        .catch((err) => res.status(400).json({ message: err.message }));
});
exports.default = userRouter;
