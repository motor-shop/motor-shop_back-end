import { Request, Response } from "express";
import handleError from "../../errors/handleError";
import advertUpdateService from "../../services/adverts/advertUpdate.service";

const advertDeleteController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        await advertUpdateService({ is_active: false }, id);

        res.status(204).send();
    } catch (error: any) {
        handleError(error, req, res);
    }
};

export default advertDeleteController;
