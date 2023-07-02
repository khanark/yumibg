"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const database_1 = require("./config/database");
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = require("./config/routes");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = Number(process.env.PORT);
const startServer = () => {
    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    (0, database_1.db)();
    (0, routes_1.router)(app);
    app.get('/', (req, res) => {
        res.send('Hello World!');
    });
    app.listen(port, () => console.log(`⚡️[server]: Server is running at http://localhost:${port}`));
};
startServer();
