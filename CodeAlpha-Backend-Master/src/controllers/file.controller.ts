import { Request, Response } from "express"
import { FileSchema } from "../models/file.schema";
import router from "../routers/user.router";

// (controlador de archivos)
export const getAllFiles = async (req: Request, res: Response) => {
    const obtenerArchivos = await FileSchema.find({});

    if(obtenerArchivos)
    res.send({
        status: true,
        message: 'Obtencion de archivos exitoso',
        obtenerArchivos
    });
    else
    res.send({
        status: false,
        message: 'Se produjo un error en la obtencion de archivos'});
    res.end();
}

// (controlador de archivos)
export const getFilesById = async (req: Request, res: Response) => {
    const obtenerArchivosPorId = await FileSchema.findOne({_id: req.params.id});

    if(obtenerArchivosPorId)
    res.send({
        status: true,
        message: 'Archivo obtenido por id exitoso',
        obtenerArchivosPorId
    });
    else
    res.send({
        status: false,
        message: 'El id ingresado es invalido o no existe'});
    res.end();
}