"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = new mongoose_1.default.Schema({
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
}, { versionKey: false });
exports.UserSchema = mongoose_1.default.model('users', Schema);
