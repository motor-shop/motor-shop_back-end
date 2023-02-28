import { Request, Response } from "express";
import handleError from "../../errors/handleError";
import sessionService from "../../services/login/session.service";

const sessionController = async (req: Request, res: Response) => {
    try {
        const session = await sessionService(req.body);

        return res
            .status(201)
            .json({ message: "successfully logged in", data: session });
    } catch (error: any) {
        handleError(error, req, res);
    }
};

export default sessionController;
