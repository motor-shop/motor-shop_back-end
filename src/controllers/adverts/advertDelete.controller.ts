import { Request, Response } from "express";
import handleError from "../../errors/handleError";
import advertDeleteService from "../../services/adverts/advertDelete.service";

const advertDeleteController = async (req: Request, res: Response) => {
    try {
        await advertDeleteService(req.params.id, req.body.decodifiedToken.id);

        res.status(204).send();
    } catch (error: any) {
        handleError(error, req, res);
    }
};

export default advertDeleteController;
