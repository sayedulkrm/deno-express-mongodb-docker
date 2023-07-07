// @ts-ignore
import { Request, Response, NextFunction } from "npm:express";

export const catchAsyncError =
    (passedFunction: any) =>
    (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(passedFunction(req, res, next)).catch(next);
    };
