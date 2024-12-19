import express from "express";
import {logIn} from "../controller/user.js";
import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const loginRouter = express.Router();

loginRouter.get('/', (req, res) => {
    res.render(path.join(__dirname, '..', 'views', 'login.ejs'));
})
loginRouter.post('/', logIn);

export default loginRouter;