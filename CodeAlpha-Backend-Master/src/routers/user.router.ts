import express from 'express';
import { login, sign } from '../controllers/user.controller';

const router = express.Router();

// (controlador de usuarios) login
// localhost:3000/users/login
router.post('/login', login);

// (controlador de usuarios) sign
// localhost:3000/users/sign
router.post('/sign', sign);

export default router;