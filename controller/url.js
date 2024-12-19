import User from "../models/User.js";
import shortid from "shortid";

async function userUrl(req, res) {
    const { redirectUrl } = req.body;

    const short = shortid();
    try {
        const user = new User({ shortId: short, redirectUrl })
        await user.save();
        res.status(201).json({ user: "create succesfully" })

    } catch (err) {
        res.status(400).json({ user: "bad request" });
        console.log(err);
    }
    res.send(short);

}

export default userUrl;