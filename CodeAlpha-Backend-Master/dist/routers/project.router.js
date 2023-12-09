"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const project_controller_1 = require("../controllers/project.controller");
const router = express_1.default.Router();
// (controlador de proyectos) Obtener todos los proyectos
// localhost:3000/projects
router.get('/', project_controller_1.getAllProjects);
// (controlador de proyectos) Obtener proyectos por id
// localhost:3000/projects/id
router.get('/:id', project_controller_1.getProjectsById);
// (controlador de proyectos) Obtener detalle de archivos por id para un proyecto en particular
// localhost:3000/projects/id-file
router.get('/files/:id', project_controller_1.obtenerContenidoFiles);
exports.default = router;
