"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = new mongoose_1.default.Schema({
    name: String,
    content: String,
    type: String,
    projectId: mongoose_1.default.Types.ObjectId,
    createdAt: Date,
    updatedAt: Date
}, { versionKey: false });
exports.FileSchema = mongoose_1.default.model('files', Schema);
