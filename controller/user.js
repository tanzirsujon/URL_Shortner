import UserUrl from "../models/Urluser.js";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from 'uuid';
import { setLoggerUser, getLoggerUser } from "../services/auth.js";


export async function signUP(req, res) {

    try {
        let { username, email, password } = req.body;
        const saltround = 10;
        const salting = await bcrypt.genSalt(saltround);
        const hashpassword = await bcrypt.hash(password, salting);
        let user = new UserUrl({ username, email, password: hashpassword });
        await user.save();
        res.redirect('/');


    } catch (error) {
        console.log(`got an error in signup ${error}`)

        if (error.name === 'ValidationError') {

            const errors = Object.values(error.errors).map((err) => err.message);

            return res.status(400).json({
                success: false,
                message: 'Validation error',
                errors, // List of all validation error messages
            });
        }
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }

}

export async function logIn(req, res) {

    try {

        const { username, password } = req.body;

        const user = await UserUrl.findOne({ username });
        if (!user) {
            res.send("invalid name or password");
        }
        let isPassword = await bcrypt.compare(password, user.password);
        if (!isPassword) {
            res.send("invalid name or password");
        }
        const sessionId = uuidv4();
        setLoggerUser(sessionId, user);
        res.cookie('uuid', sessionId);

        res.redirect('/home');

    } catch (error) {

        if (error.name === 'ValidationError') {
            const errors = Object.values(error.errors).map((err) => err.message);

            return res.status(400).json({
                success: false,
                message: 'Validation error',
                errors, // List of all validation error messages
            });
        }
        console.log(`got an error in login ${error}`)

    }

}
