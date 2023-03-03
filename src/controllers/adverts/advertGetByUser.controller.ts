import { Request, Response } from "express";
import handleError from "../../errors/handleError";
import advertGetByUserService from "../../services/adverts/advertGetByUser.service";

const advertGetByUserController = async (req: Request, res: Response) => {
    try {
        const adverts = await advertGetByUserService(
            req.body.decodifiedToken.id
        );

        res.status(200).json(adverts);
    } catch (error: any) {
        handleError(error, req, res);
    }
};

export default advertGetByUserController;
