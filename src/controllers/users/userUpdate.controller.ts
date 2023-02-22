import { Request, Response } from "express";
import userUpdateService from "../../services/users/userUpdate.service";

const userUpdateController = async (req: Request, res: Response) => {
    const user = req.body;
    const idUser = req.params.id;
    const updateUser = await userUpdateService(idUser, user);

    return res.status(200).json(updateUser);
};

export default userUpdateController;
