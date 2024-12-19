import mongoose from "mongoose";

async function conn(params) {

    try {
        await mongoose.connect(params);
        console.log('Mongodb is connected');
    } catch (error) {
        console.log(`inter server error and error is ${error}`);
    }


}

export default conn;