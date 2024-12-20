import express from "express";
import userUrl from "../controller/url.js";
import redirecUser from "../controller/redirect.js";
const urlRoute = express.Router();

urlRoute.post('/', userUrl);
urlRoute.get('/:slug', redirecUser);

export default urlRoute;