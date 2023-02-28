import { Request, Response } from "express";
import handleError from "../../errors/handleError";
import userUpdateService from "../../services/users/userUpdate.service";

const userUpdateController = async (req: Request, res: Response) => {
    try {
        const user = req.body;
        const idUser = req.params.id;
        const updateUser = await userUpdateService(idUser, user);

        return res.status(200).json(updateUser);
    } catch (error: any) {
        handleError(error, req, res);
    }
};

export default userUpdateController;
