import { Request, Response } from "express";
import handleError from "../../errors/handleError";
import advertListService from "../../services/adverts/advertList.service";

const advertListController = async (req: Request, res: Response) => {
    try {
        const adverts = await advertListService();

        res.status(200).json(adverts);
    } catch (error: any) {
        handleError(error, req, res);
    }
};

export default advertListController;
