"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lowercase = void 0;
const lowercase = () => {
    return (req, res, next) => {
        const body = req.body;
        Object.keys(body).forEach((field) => {
            if (typeof body[field] === 'string') {
                body[field] = body[field].toLowerCase();
            }
        });
        next();
    };
};
exports.lowercase = lowercase;
