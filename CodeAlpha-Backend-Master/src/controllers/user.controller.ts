import { Request, Response } from "express"
import { UserSchema } from "../models/user.schema";
import router from "../routers/user.router";

// (controlador de usuarios) login
export const login = async (req: Request, res: Response) => {
    const usuario_login = await UserSchema.findOne({name:req.body.name, email: req.body.email, password: req.body.password}, {password: false});

    if(usuario_login)
    res.send({
        status: true,
        message: 'Login exitoso',
        usuario_login
    });
    else
    res.send({
        status: false,
        message: 'Correo o contraseña invalidos'});
    res.end();
}


// (controlador de usuarios) sign
export const sign = async (req: Request, res: Response) => {
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

    const usuario_sign_exist = await UserSchema.findOne(
        {
            $or: [
                {name: name}, 
                {email: email}, 
                {nombres: nombres}
            ]}, {password: false});

    if(usuario_sign_exist){
        return res.send({
            status: true,
            message: 'El usuario ya esta registrado',
            usuario_sign: { registrado: true }
        })
    }
    
    const usuario_sign = await UserSchema.create(nuevoUsuario);
    
    
    res.send({
        status: true,
        message: 'Sign exitoso',
        usuario_sign: { registrado: false }
    });
    res.end();
}