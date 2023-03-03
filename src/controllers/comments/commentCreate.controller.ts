import { Request, Response } from "express";
import handleError from "../../errors/handleError";
import commentCreateService from "../../services/comments/commentCreate.service";

const commentCreateController = async (req: Request, res: Response) => {
    try {
        const idUser = req.params.idUser;
        const comment = await commentCreateService(req.body, idUser);

        return res.status(201).json(comment);
    } catch (error: any) {
        handleError(error, req, res);
    }
};

export default commentCreateController;
