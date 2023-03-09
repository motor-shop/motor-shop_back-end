import { Request, Response } from "express";
import handleError from "../../errors/handleError";
import advertUpdateService from "../../services/adverts/advertUpdate.service";

const advertUpdateController = async (req: Request, res: Response) => {
    try {
        console.log(req.params);
        const advertUpdated = await advertUpdateService(
            req.body,
            req.params.id,
            req.body.decodifiedToken.id
        );

        res.status(200).json(advertUpdated);
    } catch (error: any) {
        handleError(error, req, res);
    }
};

export default advertUpdateController;
