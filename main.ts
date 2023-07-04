import express from "npm:express";
import { load } from "https://deno.land/std/dotenv/mod.ts";
const env = await load();

const PORT = env.PORT;

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}!`);
});
