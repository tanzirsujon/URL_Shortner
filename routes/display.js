import express from "express";
import { getLoggerUser } from "../services/auth.js";

import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const displayRouter = express.Router();

displayRouter.get('/', (req, res) => {
    let userid = req.cookies.uuid;


    const userrr = getLoggerUser(userid);
    const user = userrr.username;

    res.render(path.join(__dirname, '..', 'views', 'display.ejs'), { user });
})


export default displayRouter;