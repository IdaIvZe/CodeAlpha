import { Request, Response } from "express";
import { ProjectSchema } from "../models/project.schema";
import router from "../routers/user.router";
import mongoose from "mongoose";

// (controlador de proyectos)
export const getAllProjects = async (req: Request, res: Response) => {
    const obtenerProyectos = await ProjectSchema.find({});

    if(obtenerProyectos)
    res.send({
        status: true,
        message: 'Obtencion de proyectos exitoso',
        obtenerProyectos
    });
    else
    res.send({
        status: false,
        message: 'Se produjo un error en la obtencion de proyectos'});
    res.end();
}

// (controlador de proyectos)
export const getProjectsById = async (req: Request, res: Response) => {
    const obtenerProyectosPorId = await ProjectSchema.findOne({_id: req.params.id});

    if(obtenerProyectosPorId)
    res.send({
        status: true,
        message: 'Proyecto obtenido por id exitoso',
        obtenerProyectosPorId
    });
    else
    res.send({
        status: false,
        message: 'El id ingresado es invalido o no existe'});
    res.end();
}

// (controlador de proyetos) obtener contenido de todos los archivos de un proyecto en particular
export const obtenerContenidoFiles = async (req: Request, res: Response) => {
    const projectId = req.params.id;
    const cruceProjectsFiles = await ProjectSchema.aggregate(
            [
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
                        _id: new mongoose.Types.ObjectId(projectId)
                    }
                },
            ]
        );
    res.send(cruceProjectsFiles);
    res.end();
}
