import { Request, Response } from "express";
import handleError from "../../errors/handleError";
import usersListService from "../../services/users/usersList.service";

const usersListController = async (req: Request, res: Response) => {
    try {
        const users = await usersListService();

        return res.status(200).send(users);
    } catch (error: any) {
        handleError(error, req, res);
    }
};

export default usersListController;
