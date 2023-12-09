import mongoose from "mongoose";

export interface Project {
    _id?: mongoose.Types.ObjectId;
    name: string;
    description: string;
    userId?: mongoose.Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
    files: Array<mongoose.Types.ObjectId>;
}