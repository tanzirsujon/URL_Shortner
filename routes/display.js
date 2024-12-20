import express from "express";

import User from "../models/User.js";

import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const displayRouter = express.Router();

displayRouter.get('/', async (req, res) => {
    if (!req.user) return res.redirect("/");
    const allurls = await User.find({ createdBy: req.user._id });

    let user = req.user.username;


    res.render('display', { user, urls: allurls });
})


export default displayRouter;