// @ts-ignore
import { Request, Response, NextFunction } from "npm:express@4.18.2";
// @ts-ignore
import { catchAsyncError } from "../middlewares/catchAsyncError.ts";
// @ts-ignore
import Errorhandler from "../utils/ErrorHandler.ts";

// @ts-ignore
import { User } from "../models/User.ts";

// @ts-ignore

export const register = catchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return next(new Errorhandler("please enter all the fields", 400));
        }

        let user = await User.findOne({ email });

        if (user) {
            return next(new Errorhandler("user already exists", 400));
        }

        user = await User.create({
            name,
            email,
            password,
        });

        res.status(200).json({
            success: true,
            user,
        });
    }
);

export const login = catchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
        const { email, password } = req.body;

        if (!email || !password) {
            return next(new Errorhandler("please enter all the fields", 400));
        }

        const user = await User.findOne({ email }).select("+password");
        if (!user) {
            return next(
                new Errorhandler("Email or Password is incorrect", 404)
            );
        }

        // Password Check
        const isMatch = password === user.password;
        if (!isMatch) {
            return next(
                new Errorhandler("Email or Password is incorrect", 404)
            );
        }

        res.status(200).json({
            success: true,
            user,
            message: `Welcome Back ${user.name}`,
        });
    }
);
