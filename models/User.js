import mongoose from "mongoose";

let userSchema = mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true,
    },
    redirectUrl: {
        type: String,
        required: true,

    }
})

const User = new mongoose.model('user', userSchema);

export default User;