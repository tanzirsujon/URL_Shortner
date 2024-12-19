import User from "../models/User.js";

async function redirecUser(req, res) {
    const slug = req.params.slug;
    try {
        const user = await User.findOne({ shortId: slug });
        if (!user) {
            res.status(404).json({ "user": "not found" })

        }
        res.redirect(user.redirectUrl);
    } catch (error) {
        console.log(`inter error ${error}`);
    }


}
export default redirecUser;