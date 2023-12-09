"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sign = exports.login = void 0;
const user_schema_1 = require("../models/user.schema");
// (controlador de usuarios) login
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuario_login = yield user_schema_1.UserSchema.findOne({ name: req.body.name, email: req.body.email, password: req.body.password }, { password: false });
    if (usuario_login)
        res.send({
            status: true,
            message: 'Login exitoso',
            usuario_login
        });
    else
        res.send({
            status: false,
            message: 'Correo o contraseña invalidos'
        });
    res.end();
});
exports.login = login;
// (controlador de usuarios) sign
const sign = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, password, confirmPassword, nombres, email } = req.body;
    if (password !== confirmPassword) {
        return res.send("Las contraseñas no coinciden");
    }
    const nuevoUsuario = {
        "name": name,
        "email": email,
        "password": password,
        "confirmPassword": confirmPassword,
        "plan": {
            "free": true,
            "pro": false,
            "enterprise": false
        },
        "nombres": nombres,
        "registrado": true
    };
    const usuario_sign_exist = yield user_schema_1.UserSchema.findOne({
        $or: [
            { name: name },
            { email: email },
            { nombres: nombres }
        ]
    }, { password: false });
    if (usuario_sign_exist) {
        return res.send({
            status: true,
            message: 'El usuario ya esta registrado',
            usuario_sign: { registrado: true }
        });
    }
    const usuario_sign = yield user_schema_1.UserSchema.create(nuevoUsuario);
    res.send({
        status: true,
        message: 'Sign exitoso',
        usuario_sign: { registrado: false }
    });
    res.end();
});
exports.sign = sign;
