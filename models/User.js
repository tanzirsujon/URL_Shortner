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

    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    },

})

const User = new mongoose.model('user', userSchema);

export default User;