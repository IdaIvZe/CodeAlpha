"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_router_1 = __importDefault(require("./routers/user.router"));
const project_router_1 = __importDefault(require("./routers/project.router"));
const file_router_1 = __importDefault(require("./routers/file.router"));
const database_1 = require("./utils/database");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const db = new database_1.Database();
app.use((0, cors_1.default)());
app.use(express_1.default.json()); //Poblar el objeto body
app.use('/users', user_router_1.default);
app.use('/projects', project_router_1.default);
app.use('/files', file_router_1.default);
app.get("/", (req, res) => {
    res.send("Servidor de ejercicio de netflix");
    res.end();
});
app.listen(3000, () => {
    console.log("Servidor levantado");
});
