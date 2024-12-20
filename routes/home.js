import express from "express";
import userUrl from "../controller/url.js";
import redirecUser from "../controller/redirect.js";
import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const homeRouter = express.Router();

homeRouter.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, '..', 'index.html'));
})
homeRouter.post('/', userUrl);
homeRouter.get('/:slug', redirecUser);

export default homeRouter;