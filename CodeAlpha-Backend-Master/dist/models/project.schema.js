"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = new mongoose_1.default.Schema({
    name: String,
    description: String,
    userId: mongoose_1.default.Types.ObjectId,
    createdAt: Date,
    updatedAt: Date,
    files: (Array),
}, { versionKey: false });
exports.ProjectSchema = mongoose_1.default.model('projects', Schema);
