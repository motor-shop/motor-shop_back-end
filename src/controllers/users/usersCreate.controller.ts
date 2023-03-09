import { Request, Response } from "express";
import userCreateService from "../../services/users/usersCreate.service";
import { instanceToPlain } from "class-transformer";
import handleError from "../../errors/handleError";

const userCreateController = async (req: Request, res: Response) => {
    try {
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
    } catch (error: any) {
        handleError(error, req, res);
    }
};

export default userCreateController;
