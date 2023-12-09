import express, {Request, Response, Express} from 'express';
import userRouter from './routers/user.router';
import projectRouter from './routers/project.router';
import fileRouter from './routers/file.router';
import { Database } from './utils/database';
import cors from 'cors';

const app:Express = express();
const db:Database = new Database();

app.use(cors());
app.use(express.json()); //Poblar el objeto body

app.use('/users', userRouter);
app.use('/projects', projectRouter);
app.use('/files', fileRouter);

app.get("/", (req: Request, res: Response) => {
    res.send("Servidor de ejercicio de netflix");
    res.end();
});

app.listen(3000, () =>{
    console.log("Servidor levantado");
})