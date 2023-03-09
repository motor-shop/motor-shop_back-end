import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppErrors";
import { IEmailRequest } from "../../interfaces/email";
import { sendEmail } from "../../utils/sendEmail.util";
import jwt from "jsonwebtoken";

const sendResetPasswordService = async (email: string): Promise<void> => {
    const usersRepository = AppDataSource.getRepository(User);

    if (!email) {
        throw new AppError(400, "chave email é obrigatoria");
    }

    const user = await usersRepository.findOne({
        where: { email: email },
    });

    if (!user) throw new AppError(404, "User not found");

    const resetPasswordToken = jwt.sign(
        { email: user.email },
        process.env.SECRET_KEY as string,
        { expiresIn: "24h", subject: user.id }
    );

    await usersRepository.update(
        {
            id: user.id,
        },
        {
            token_reset_password: resetPasswordToken,
        }
    );

    const htmlText = `<h1>Crie uma nova senha</h1><p>Olá ${user.username}, 
        vimos que vc solicitou uma redefinição de senha e estamos aqui para te ajudar!! Clique nesse link
        para redefinir sua senha: <a href="http://localhost:3000/reset-password/${resetPasswordToken}">
        https://redefinir-senha.com.br</a></p><br><br><p>Esse link é válido apenas por 24 horas!</p>`;

    const emailData: IEmailRequest = {
        subject: "Criar nova senha",
        text: htmlText,
        to: user.email,
    };

    await sendEmail(emailData);
};

export default sendResetPasswordService;
