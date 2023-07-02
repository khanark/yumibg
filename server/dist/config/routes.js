"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const controllers_module_1 = require("../controllers/controllers.module");
const router = (app) => {
    app.use('/api/users', controllers_module_1.userRouter);
    app.use('/api/recipes', controllers_module_1.recipeRouter);
};
exports.router = router;
