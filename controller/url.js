import User from "../models/User.js";
import shortid from "shortid";


async function userUrl(req, res) {
    const { redirectUrl } = req.body;

    const short = shortid();
    try {

        const user = new User({
            shortId: short,
            redirectUrl,
            createdBy:req.user._id,

        })
        await user.save();
        res.redirect('/display');

    } catch (err) {
        res.status(400).json({ user: "bad request" });
        console.log(err);
    }


}

export default userUrl;