import mongoose from "mongoose";
import { Project } from "./project.model";

const Schema = new mongoose.Schema<Project>(
    {
        name: String,
        description: String,
        userId: mongoose.Types.ObjectId,
        createdAt: Date,
        updatedAt: Date,
        files: Array<mongoose.Types.ObjectId>,
    }
    , { versionKey: false });

export const ProjectSchema = mongoose.model('projects', Schema);