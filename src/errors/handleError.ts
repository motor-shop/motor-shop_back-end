import { NextFunction, Request, Response } from "express";
import { AppError } from "./AppErrors";

const handleError = (err: Error, request: Request, response: Response) => {
    if (err instanceof AppError) {
        return response.status(err.statusCode).json({
            status: "error",
            message: err.message,
        });
    }

    console.error(err);

    return response.status(500).json({
        status: "error",
        message: "Internal server error",
    });
};

export default handleError;
