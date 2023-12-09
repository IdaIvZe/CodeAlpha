import mongoose from "mongoose";
import { User } from "./user.model";

const Schema = new mongoose.Schema<User>(
    {
        name: String,
        email: String,
        password: String,
        confirmPassword: String,
        plan: {
            free: Boolean,
            pro: Boolean,
            enterprise: Boolean
        },
        nombres: String,
        registrado: Boolean
    }
    , { versionKey: false });

export const UserSchema = mongoose.model('users', Schema);