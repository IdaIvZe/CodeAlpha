import express from 'express';
import { getAllFiles, getFilesById } from '../controllers/file.controller';

const router = express.Router();

// (controlador de proyectos) Obtener todos los proyectos
// localhost:3000/files
router.get('/', getAllFiles);

// (controlador de proyectos) Obtener proyectos por id
// localhost:3000/files/id
router.get('/:id', getFilesById);

export default router;