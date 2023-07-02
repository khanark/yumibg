"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authenticate = () => {
    return (req, res, next) => {
        if (req.headers['x-auth-token']) {
            const token = req.headers['x-auth-token'];
            jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET, (err, decoded) => {
                if (err) {
                    res.status(403).json({ message: 'Forbidden' });
                }
            });
            next();
        }
        else {
            res.status(401).json({ message: 'Unauthorized' });
        }
    };
};
exports.authenticate = authenticate;
