import { Request, Response } from "express";
import { AppError } from "../../errors/AppErrors";
import handleError from "../../errors/handleError";
import advertUpdateService from "../../services/adverts/advertUpdate.service";

const advertUpdateController = async (req: Request, res: Response) => {
    try {
        const advertUpdated = await advertUpdateService(
            req.body,
            req.params.id
        );

        res.status(200).json(advertUpdated);
    } catch (error: any) {
        handleError(error, req, res);
    }
};

export default advertUpdateController;
