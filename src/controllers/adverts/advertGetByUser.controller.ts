import { Request, Response } from "express";
import advertGetByUserService from "../../services/adverts/advertGetByUser.service";

const advertGetByUserController = async (req: Request, res: Response) => {
    const adverts = await advertGetByUserService(req.params.id);

    res.status(200).json(adverts);
};

export default advertGetByUserController;
