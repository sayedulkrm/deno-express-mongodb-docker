// @ts-ignore
import mongoose from "npm:mongoose@7.3.2";

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

export const User = mongoose.model("User", schema);
