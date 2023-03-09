import { Request, Response } from "express";
import { AppError } from "../../errors/AppErrors";
import handleError from "../../errors/handleError";
import usersListByIdService from "../../services/users/usersListById.service";

const usersListByIdController = async (req: Request, res: Response) => {
    try {
        const user = await usersListByIdService(req.params.id);

        res.status(200).json(user);
    } catch (error: any) {
        handleError(error, req, res);
    }
};

export default usersListByIdController;
