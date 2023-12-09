import express from 'express';
import { getAllProjects, getProjectsById, obtenerContenidoFiles } from '../controllers/project.controller';

const router = express.Router();

// (controlador de proyectos) Obtener todos los proyectos
// localhost:3000/projects
router.get('/', getAllProjects);

// (controlador de proyectos) Obtener proyectos por id
// localhost:3000/projects/id
router.get('/:id', getProjectsById);

// (controlador de proyectos) Obtener detalle de archivos por id para un proyecto en particular
// localhost:3000/projects/id-file
router.get('/files/:id', obtenerContenidoFiles);

export default router;