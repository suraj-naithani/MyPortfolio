import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const MONGODB_URL = process.env.MONGODB_URL;

export default async function connectToDB() {
    try {
        await mongoose.connect(MONGODB_URL);
        console.log("Database connected successfully");
    } catch (e) {
        console.log(e);
    }
}
