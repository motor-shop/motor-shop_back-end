import { Request, Response } from "express";
import advertListService from "../../services/adverts/advertList.service";

const advertListController = async (req: Request, res: Response) => {
    const adverts = await advertListService();

    res.status(200).json(adverts);
};

export default advertListController;