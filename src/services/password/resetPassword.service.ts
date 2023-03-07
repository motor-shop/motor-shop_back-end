import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppErrors";
import * as bcrypt from "bcrypt";

const resetPasswordService = async (
    token: string,
    newPassword: string
): Promise<void> => {
    const usersRepository = AppDataSource.getRepository(User);

    if (!token) {
        throw new AppError(400, "chave token é obrigatoria");
    }

    if (!newPassword) {
        throw new AppError(400, "chave newPassword é obrigatoria");
    }

    const user = await usersRepository.findOne({
        where: { token_reset_password: token },
    });

    if (!user) throw new AppError(404, "User not found");

    await usersRepository.update(
        {
            id: user.id,
        },
        {
            token_reset_password: "",
            password: bcrypt.hashSync(newPassword, 10),
        }
    );
};

export default resetPasswordService;
