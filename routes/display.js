import express from "express";

import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const displayRouter = express.Router();

displayRouter.get('/', (req, res) => {
    let welcome = "welcome user";

    res.render(path.join(__dirname, '..', 'views', 'display.ejs'), { user: welcome });
})


export default displayRouter;