import { Request, Response } from "express";
import handleError from "../../errors/handleError";
import commentsListService from "../../services/comments/commentsList.service";

const commentsListController = async (req: Request, res: Response) => {
    try {
        const comments = await commentsListService();

        return res.status(200).json(comments);
    } catch (error: any) {
        handleError(error, req, res);
    }
};

export default commentsListController;
