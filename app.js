import express from "express";

import dotenv from "dotenv";
import urlRoute from "./routes/url.js";
import signupRouter from "./routes/signup.js";
import conn from "./connection/connection.js";
import loginRouter from "./routes/login.js";
import cookieParser from "cookie-parser";
import { onlyLoggedUser, CheckAuth } from "./middleware/auth.js";
import path from "path"
import displayRouter from "./routes/display.js";
import homeRouter from "./routes/home.js";
dotenv.config();
const app = express();
app.use(express.static('public'));
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// app.use('/url', onlyLoggedUser, urlRoute);
app.use('/signup', signupRouter);
app.use('/', loginRouter);
app.use('/display', CheckAuth, displayRouter);
const port = process.env.PORT | 3000;
const db_url = process.env.DB_URL;

conn(db_url);
app.use('/home', onlyLoggedUser, homeRouter);

app.listen(port, () => {
    console.log(`Server runnig at ${port}`);
})