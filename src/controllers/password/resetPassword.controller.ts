import { Request, Response } from "express";
import handleError from "../../errors/handleError";
import resetPasswordService from "../../services/password/resetPassword.service";

const resetPasswordController = async (req: Request, res: Response) => {
    try {
        const { token, newPassword } = req.body;

        await resetPasswordService(token, newPassword);
        return res.status(204).send();
    } catch (error: any) {
        handleError(error, req, res);
    }
};

export default resetPasswordController;
