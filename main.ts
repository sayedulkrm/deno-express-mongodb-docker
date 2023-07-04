import express from "npm:express";
import { load } from "https://deno.land/std/dotenv/mod.ts";
const env = await load();

const PORT = env.PORT;

const app = express();

app.get("/", (req, res) => {
    res.send(
        `Server running. To check the frontend go here: http://localhost:3000`
    );
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}!`);
});
