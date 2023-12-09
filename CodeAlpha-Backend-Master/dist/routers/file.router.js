"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const file_controller_1 = require("../controllers/file.controller");
const router = express_1.default.Router();
// (controlador de proyectos) Obtener todos los proyectos
// localhost:3000/files
router.get('/', file_controller_1.getAllFiles);
// (controlador de proyectos) Obtener proyectos por id
// localhost:3000/files/id
router.get('/:id', file_controller_1.getFilesById);
exports.default = router;
