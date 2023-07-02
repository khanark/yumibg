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
exports.updateUser = exports.getSingleUser = exports.register = exports.login = void 0;
const User_1 = require("../models/User");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const login = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = user;
    const existingUser = yield User_1.User.findOne({ email });
    if (!existingUser) {
        throw new Error('User does not exist');
    }
    const isPasswordCorrect = yield bcrypt_1.default.compare(password, existingUser.password);
    if (!isPasswordCorrect) {
        throw new Error('Invalid credentials');
    }
    const token = jsonwebtoken_1.default.sign({ email: existingUser.email }, process.env.JWT_SECRET, {
        expiresIn: '1h',
    });
    return Object.assign(Object.assign({}, existingUser.toJSON()), { token });
});
exports.login = login;
const register = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password, firstName, lastName } = user;
    const existingUser = yield User_1.User.findOne({ email });
    if (existingUser) {
        throw new Error('User already exists');
    }
    if (password.length < 6) {
        throw new Error('Password must be at least 6 characters long');
    }
    const hashedPassword = yield bcrypt_1.default.hash(password, 12);
    const newUser = new User_1.User({
        email,
        password: hashedPassword,
        firstName,
        lastName,
    });
    const result = yield newUser.save();
    const token = jsonwebtoken_1.default.sign({ email: result.email }, process.env.JWT_SECRET, {
        expiresIn: '1h',
    });
    return Object.assign(Object.assign({}, result.toJSON()), { token });
});
exports.register = register;
const getSingleUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield User_1.User.findById(id);
});
exports.getSingleUser = getSingleUser;
const updateUser = (id, user) => __awaiter(void 0, void 0, void 0, function* () {
    yield User_1.User.findByIdAndUpdate(id, user), { runValidators: true };
    return getSingleUser(id);
});
exports.updateUser = updateUser;
