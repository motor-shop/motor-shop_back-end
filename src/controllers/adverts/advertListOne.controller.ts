import { Request, Response } from "express";
import handleError from "../../errors/handleError";
import advertListOneService from "../../services/adverts/advertListOne.service";

const advertListOneController = async (req: Request, res: Response) => {
    try {
        const advert = await advertListOneService(req.params.id);

        res.status(200).json(advert);
    } catch (error: any) {
        handleError(error, req, res);
    }
};

export default advertListOneController;
