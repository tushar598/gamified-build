import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "./server/.env" });


export const connectdb = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL);

        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);
    }
}