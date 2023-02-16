import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/AppErrors";
import usersListService from "../../services/users/usersList.service";

const usersListController = async (req: Request, res: Response) => {
    try {
        const users = await usersListService();

        return res.status(200).send(users);
    } catch (err) {
        if (err instanceof AppError) {
            handleError(err, res);
        }
    }
};

export default usersListController;
