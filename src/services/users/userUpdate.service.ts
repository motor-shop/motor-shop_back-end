import { hashSync } from "bcryptjs";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppErrors";
import { IUserUpdate } from "../../interfaces/users/userUpdate";

const userUpdateService = async (
    id: string,
    user: IUserUpdate
): Promise<User> => {
    const userRepository = AppDataSource.getRepository(User);
    const userFind = await userRepository.findOneBy({
        id,
    });

    if (!userFind) {
        throw new AppError(404, "User not found");
    }

    await userRepository.update(id, {
        username: user.username ? user.username : userFind.username,
        email: user.email ? user.email : userFind.email,
        cpf: user.cpf ? user.cpf : userFind.cpf,
        cellphone: user.cellphone ? user.cellphone : userFind.email,
        birth_at: user.birth_at ? user.birth_at : userFind.birth_at,
        description: user.description ? user.description : userFind.description,
        password: user.password
            ? hashSync(user.password, 10)
            : userFind.password,
        confirm_password: user.confirm_password
            ? user.confirm_password
            : userFind.confirm_password,
        adress: user.adress_id ? user.adress_id : userFind.adress,
    });

    const userReturned = await userRepository.findOneBy({
        id,
    });

    return userReturned!;
};

export default userUpdateService;
