// @ts-ignore
import express from "npm:express";

const app = express();

app.get("/", (req, res) => {
    res.send(
        `Server running. To check the frontend go here: http://localhost:3000`
    );
});

export default app;
