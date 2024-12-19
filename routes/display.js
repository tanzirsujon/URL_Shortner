import express from "express";

import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const displayRouter = express.Router();

displayRouter.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'display.html'));
})


export default displayRouter;