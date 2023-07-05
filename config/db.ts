// @ts-ignore
import mongoose from "npm:mongoose";
// @ts-ignore
import { load } from "https://deno.land/std/dotenv/mod.ts";
const env = await load();

const mongoURL = env.MONGODB_URL;

export const connectDB = async () => {
    try {
        const { connection } = await mongoose.connect(mongoURL);
        console.log(`MongoDB connected on: ${connection.host}`);
    } catch (error) {
        console.log(
            error,
            "Ohh No! an error occured to connecting with database"
        );
    }
};
