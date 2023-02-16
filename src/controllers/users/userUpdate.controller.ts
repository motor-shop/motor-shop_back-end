import { Request, Response } from "express";
import { AppError } from "../../errors/AppErrors";
import { handleError } from "../../errors/AppErrors";
import userUpdateService from "../../services/users/userUpdate.service";

const userUpdateController = async (req: Request, res: Response) => {
    try {
        const user = req.body;
        const idUser = req.params.id;
        const updateUser = await userUpdateService(idUser, user);

        return res.status(200).json(updateUser);
    } catch (error) {
        if (error instanceof AppError) {
            handleError(error, res);
        }
    }
};

export default userUpdateController;
