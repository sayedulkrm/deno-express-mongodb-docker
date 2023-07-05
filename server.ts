// @ts-ignore
import { load } from "https://deno.land/std/dotenv/mod.ts";
// @ts-ignore
import { connectDB } from "./config/db.ts";
// @ts-ignore
import app from "./app.ts";

connectDB();

const env = await load();

const PORT = env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}!`);
});
