import { Request, Response } from "express";
import usersListService from "../../services/users/usersList.service";

const usersListController = async (req: Request, res: Response) => {
    const users = await usersListService();

    return res.status(200).send(users);
};

export default usersListController;
