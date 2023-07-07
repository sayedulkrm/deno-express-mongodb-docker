// @ts-ignore
import express from "npm:express";
// @ts-ignore
import cors from "npm:cors";
// @ts-ignore
import cookieParser from "npm:cookie-parser";
// @ts-ignore
import ErrorMiddleware from "./middlewares/Error.ts";

const app = express();

// Importing middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

// Importing Routes

// @ts-ignore
import user from "./routes/userRoutes.ts";

app.use("/api/v1", user);

app.get("/", (req, res) => {
    res.send(
        `Server running. To check the frontend go here: http://localhost:3000`
    );
});

export default app;

app.use(ErrorMiddleware);
