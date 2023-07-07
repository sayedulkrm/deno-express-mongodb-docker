// @ts-ignore
import express from "npm:express";

const router = express.Router();

router.route("/login");

router.route("/register");

router.route("/logout");

router.route("/me");

export default router;
