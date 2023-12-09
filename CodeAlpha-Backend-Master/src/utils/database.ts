import { error } from "console";
import mongoose from "mongoose";

export class Database {
    server:string = '127.0.0.1';
    port:string = '27017';
    db:string = 'code_alpha';

    constructor() {
        mongoose.connect(`mongodb://${this.server}:${this.port}/${this.db}`)
        .then(() => {
            console.log('Se conecto a mongo');
        }).catch((error) => {
            console.error("Ocurrio un error al conectarse", error);
        });
    }
}