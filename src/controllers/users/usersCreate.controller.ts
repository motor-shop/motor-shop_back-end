import { Request, Response } from "express";
import userCreateService from "../../services/users/usersCreate.service";
import { instanceToPlain } from "class-transformer";

const userCreateController = async (req: Request, res: Response) => {
    const {
        username,
        email,
        cpf,
        cellphone,
        birth_at,
        description,
        password,
        confirm_password,
        is_seller,
        adress,
    } = req.body;

    const user = await userCreateService({
        username,
        email,
        cpf,
        cellphone,
        birth_at,
        description,
        password,
        confirm_password,
        is_seller,
        adress,
    });

    return res.status(201).json(instanceToPlain(user));
};

export default userCreateController;
