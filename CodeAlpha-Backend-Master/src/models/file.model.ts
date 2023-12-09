import mongoose from "mongoose";

export interface File {
    _id?: mongoose.Types.ObjectId;
    name: string;
    content: string;
    type: string;
    projectId?: mongoose.Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}