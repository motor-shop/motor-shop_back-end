import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const authUserMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    let token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({
            message: "Invalid token",
        });
    }
    token = token.split(" ")[1];

    jwt.verify(
        token as string,
        process.env.SECRET_KEY as string,
        (error: any, decoded: any) => {
            if (error) {
                return res.status(401).json({
                    message: "Invalid token",
                });
            }
            req.body.decodifiedToken = {
                email: decoded.email,
                id: decoded.sub,
            };
        }
    );
};
export default authUserMiddleware;
