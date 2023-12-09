"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const router = express_1.default.Router();
// (controlador de usuarios) login
// localhost:3000/users/login
router.post('/login', user_controller_1.login);
// (controlador de usuarios) sign
// localhost:3000/users/sign
router.post('/sign', user_controller_1.sign);
exports.default = router;
