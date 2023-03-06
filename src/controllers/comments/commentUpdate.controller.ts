import { Request, Response } from "express";
import handleError from "../../errors/handleError";
import commentUpdateService from "../../services/comments/commentUpdate.service";

const commentUpdateController = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const idComment = req.params.id;
        const comment = await commentUpdateService(data, idComment);

        return res.status(200).json(comment);
    } catch (error: any) {
        handleError(error, req, res);
    }
};

export default commentUpdateController;
