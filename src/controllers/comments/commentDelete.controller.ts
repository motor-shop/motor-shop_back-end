import { Request, Response } from "express";
import handleError from "../../errors/handleError";
import commentDeleteService from "../../services/comments/commentDelete.service";

const commentDeleteController = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        await commentDeleteService(id);

        return res.status(204).send();
    } catch (error: any) {
        handleError(error, req, res);
    }
};

export default commentDeleteController;
