// @ts-ignore
import { Request, Response, NextFunction } from "npm:express";

const ErrorMiddleware = (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    err.statusCode = err.statusCode || 500;

    err.message = err.message || "Internal Server Error (ErrorMiddleware file)";

    res.status(err.statusCode).json({
        success: false,
        message: err.message,
    });
};

export default ErrorMiddleware;
