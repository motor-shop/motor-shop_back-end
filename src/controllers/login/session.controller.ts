import { Request, Response } from "express";
import sessionService from "../../services/login/session.service";

const sessionController = async (req: Request, res: Response) => {
    const session = await sessionService(req.body);

    return res
        .status(201)
        .json({ message: "successfully logged in", data: session });
};

export default sessionController;
