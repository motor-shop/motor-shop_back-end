import { Request, Response } from "express";
import handleError from "../../errors/handleError";
import advertCreateService from "../../services/adverts/adverCreate.service";

const advertCreateController = async (req: Request, res: Response) => {
    try {
        const advert = await advertCreateService(req.body);

        return res.status(201).json(advert);
    } catch (error: any) {
        handleError(error, req, res);
    }
};

export default advertCreateController;
