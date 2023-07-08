// @ts-ignore
import { Request, Response, NextFunction } from "npm:express@4.18.2";

export const catchAsyncError =
    (passedFunction: any) =>
    (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(passedFunction(req, res, next)).catch(next);
    };
