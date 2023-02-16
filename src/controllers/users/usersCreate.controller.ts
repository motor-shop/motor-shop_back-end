import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/AppErrors";
import userCreateService from "../../services/users/usersCreate.service";
import { instanceToPlain } from "class-transformer";

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
    } catch (err) {
        if (err instanceof AppError) {
            handleError(err, res);
        }
    }
};

export default userCreateController;
