import mongoose from "mongoose";
import { File } from "./file.model";

const Schema = new mongoose.Schema<File>(
    {
        name: String,
        content: String,
        type: String,
        projectId: mongoose.Types.ObjectId,
        createdAt: Date,
        updatedAt: Date
    }
    , { versionKey: false });

export const FileSchema = mongoose.model('files', Schema);