import { Request, Response } from "express";
import handleError from "../../errors/handleError";
import { IEmailRequest } from "../../interfaces/email";
import sendResetPasswordService from "../../services/password/sendResetPassword.service";

const sendResetPasswordController = async (req: Request, res: Response) => {
    try {
        const { email } = req.body;

        await sendResetPasswordService(email);

        return res.status(204).send();
    } catch (error: any) {
        handleError(error, req, res);
    }
};

export default sendResetPasswordController;
