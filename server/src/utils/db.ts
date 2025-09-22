import mongoose from "mongoose";

const connect = async () => {
    try {
        await mongoose.connect(process.env.DB_URL as string);
        console.log(`Mongo DB connected.`);
    } catch (err) {
        console.log(`Mongo DB`, err);
    }
}

export { connect };