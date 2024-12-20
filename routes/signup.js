import express from "express";
import { signUP } from "../controller/user.js";
import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const signupRouter = express.Router();

signupRouter.get('/', (req, res) => {
    res.render(path.join(__dirname, '..', 'views', 'signup.ejs'));
})
signupRouter.post('/', signUP);

export default signupRouter;