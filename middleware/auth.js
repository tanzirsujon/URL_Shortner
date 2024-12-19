import { getLoggerUser } from "../services/auth.js";

async function onlyLoggedUser(req, res, next) {

    let userUid = req.cookies.uuid;

    if (!userUid) {
        return res.redirect('/signup');
    }
    const user = getLoggerUser(userUid);


    if (!user) {
        return res.redirect('/login');
    }
    req.user = user;
    next();

}

export default onlyLoggedUser;