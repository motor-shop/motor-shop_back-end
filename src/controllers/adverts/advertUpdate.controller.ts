import { Request, Response } from "express";
import advertUpdateService from "../../services/adverts/advertUpdate.service";

const advertUpdateController = async (req: Request, res: Response) => {
    const advertUpdated = await advertUpdateService(req.body, req.params.id);

    res.status(200).json(advertUpdated);
};

export default advertUpdateController;
