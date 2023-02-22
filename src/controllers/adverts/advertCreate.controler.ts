import { Request, Response } from "express";
import { AppError } from "../../errors/AppErrors";
import handleError from "../../errors/handleError";
import advertCreateService from "../../services/adverts/adverCreate.service";

const advertCreateController = async (req: Request, res: Response) => {
    const advert = await advertCreateService(req.body);

    return res.status(201).json(advert);
};

export default advertCreateController;
