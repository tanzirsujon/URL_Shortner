import { getLoggerUser } from "../services/auth.js";

export async function onlyLoggedUser(req, res, next) {

    let userUid = req.cookies.uuid;

    if (!userUid) {
        return res.redirect('/signup');
    }
    const user = getLoggerUser(userUid);


    if (!user) {
        return res.redirect('/');
    }
    req.user = user;
    next();

}

export async function notLoggedUser(req, res, next) {
    let userUid = req.cookies.uuid;

    if (!userUid) {
        return res.redirect('/signup');
    }
    next();
}

export async function CheckAuth(req, res, next) {
    let userUid = req.cookies.uuid;


    const user = getLoggerUser(userUid);

    req.user = user;


    next();
}

