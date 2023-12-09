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
exports.obtenerContenidoFiles = exports.getProjectsById = exports.getAllProjects = void 0;
const project_schema_1 = require("../models/project.schema");
const mongoose_1 = __importDefault(require("mongoose"));
// (controlador de proyectos)
const getAllProjects = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const obtenerProyectos = yield project_schema_1.ProjectSchema.find({});
    if (obtenerProyectos)
        res.send({
            status: true,
            message: 'Obtencion de proyectos exitoso',
            obtenerProyectos
        });
    else
        res.send({
            status: false,
            message: 'Se produjo un error en la obtencion de proyectos'
        });
    res.end();
});
exports.getAllProjects = getAllProjects;
// (controlador de proyectos)
const getProjectsById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const obtenerProyectosPorId = yield project_schema_1.ProjectSchema.findOne({ _id: req.params.id });
    if (obtenerProyectosPorId)
        res.send({
            status: true,
            message: 'Proyecto obtenido por id exitoso',
            obtenerProyectosPorId
        });
    else
        res.send({
            status: false,
            message: 'El id ingresado es invalido o no existe'
        });
    res.end();
});
exports.getProjectsById = getProjectsById;
// (controlador de proyetos) obtener contenido de todos los archivos de un proyecto en particular
const obtenerContenidoFiles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const fileId = req.params.id;
    const cruceProjectsFiles = yield project_schema_1.ProjectSchema.aggregate([
        {
            $lookup: {
                from: 'files',
                localField: 'files',
                foreignField: '_id',
                as: 'fileDetails',
            },
        },
        {
            $match: {
                _id: new mongoose_1.default.Types.ObjectId(fileId)
            }
        },
    ]);
    res.send(cruceProjectsFiles);
    res.end();
});
exports.obtenerContenidoFiles = obtenerContenidoFiles;
