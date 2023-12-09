import mongoose from "mongoose";

export interface User {
    _id?: mongoose.Types.ObjectId;
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    plan: {
        free: boolean;
        pro: boolean;
        enterprise: boolean;
    };
    nombres: string;
    registrado: boolean;
}