import { Request, Response } from "express";
import handleError from "../../errors/handleError";
import commentsListByAdvertService from "../../services/comments/commentsListByAdvert.service";

const commentsListByAdvertController = async (req: Request, res: Response) => {
    try {
        const idAdvert = req.params.idAdvert;
        const comments = await commentsListByAdvertService(idAdvert);

        return res.status(200).json(comments);
    } catch (error: any) {
        handleError(error, req, res);
    }
};

export default commentsListByAdvertController;
