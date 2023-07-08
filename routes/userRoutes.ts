// @ts-ignore
import express from "npm:express";
// @ts-ignore

import { login, register } from "../controllers/userController.ts";

const router = express.Router();

router.route("/login").post(login);

router.route("/register").post(register);

router.route("/logout");

router.route("/me");

export default router;
