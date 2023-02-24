import { Request, Response } from "express";
import advertListOneService from "../../services/adverts/advertListOne.service";

const advertListOneController = async (req: Request, res: Response) => {
    const advert = await advertListOneService(req.params.id);

    res.status(200).json(advert);
};

export default advertListOneController;
