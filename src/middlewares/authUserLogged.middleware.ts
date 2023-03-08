import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppErrors";
import authUserMiddleware from "./authUser.middleware";

const authUserLoggedMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (req.body.decodifiedToken.id !== req.params.id) {
        res.status(401).json({
            status: "error",
            message: "permission denied, user can have access to only his user",
        });
    }
};

export default authUserLoggedMiddleware;
