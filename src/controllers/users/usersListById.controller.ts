import { Request, Response } from "express";
import { AppError } from "../../errors/AppErrors";
import handleError from "../../errors/handleError";
import usersListByIdService from "../../services/users/usersListById.service";

const usersListByIdController = async (req: Request, res: Response) => {
    try {
        if (req.body.decodifiedToken.id !== req.params.id) {
            throw new AppError(
                401,
                "permission denied, user can have access to only his user"
            );
        }
        const user = await usersListByIdService(req.params.id);

        res.status(200).json(user);
    } catch (error: any) {
        handleError(error, req, res);
    }
};

export default usersListByIdController;
