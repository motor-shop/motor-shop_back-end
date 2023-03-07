import { Request, Response } from "express";
import handleError from "../../errors/handleError";
import usersDeleteService from "../../services/users/usersDelete.service";

const usersDeleteController = async (req: Request, res: Response) => {
    try {
        await usersDeleteService(req.params.id, req.body.decodifiedToken.id);

        res.status(204).send();
    } catch (error: any) {
        handleError(error, req, res);
    }
};

export default usersDeleteController;
