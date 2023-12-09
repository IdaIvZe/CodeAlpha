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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFilesById = exports.getAllFiles = void 0;
const file_schema_1 = require("../models/file.schema");
// (controlador de archivos)
const getAllFiles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const obtenerArchivos = yield file_schema_1.FileSchema.find({});
    if (obtenerArchivos)
        res.send({
            status: true,
            message: 'Obtencion de archivos exitoso',
            obtenerArchivos
        });
    else
        res.send({
            status: false,
            message: 'Se produjo un error en la obtencion de archivos'
        });
    res.end();
});
exports.getAllFiles = getAllFiles;
// (controlador de archivos)
const getFilesById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const obtenerArchivosPorId = yield file_schema_1.FileSchema.findOne({ _id: req.params.id });
    if (obtenerArchivosPorId)
        res.send({
            status: true,
            message: 'Archivo obtenido por id exitoso',
            obtenerArchivosPorId
        });
    else
        res.send({
            status: false,
            message: 'El id ingresado es invalido o no existe'
        });
    res.end();
});
exports.getFilesById = getFilesById;
