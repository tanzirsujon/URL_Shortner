import express from "express";

import dotenv from "dotenv";
import urlRoute from "./routes/url.js";
import signupRouter from "./routes/signup.js";
import conn from "./connection/connection.js";
import loginRouter from "./routes/login.js";
import cookieParser from "cookie-parser";
import onlyLoggedUser from "./middleware/auth.js";
import displayRouter from "./routes/display.js";
dotenv.config();
const app = express();
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/url', urlRoute);
app.use('/signup', signupRouter);
app.use('/login', loginRouter);
app.use('/display',onlyLoggedUser, displayRouter);
const port = process.env.PORT | 3000;
const db_url = process.env.DB_URL;

conn(db_url);
app.get('/', (req, res) => {
    res.send("hello this is url shorter app😁");
})

app.listen(port, () => {
    console.log(`Server runnig at ${port}`);
})