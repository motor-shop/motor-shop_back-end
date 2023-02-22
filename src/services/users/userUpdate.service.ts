import { hashSync } from "bcryptjs";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppErrors";
import { IUserUpdate } from "../../interfaces/userUpdate";

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
        cellphone: user.cellphone ? user.cellphone : userFind.email,
        description: user.description ? user.description : userFind.description,
        password: user.password
            ? hashSync(user.password, 10)
            : userFind.password,
        confirm_password: user.confirm_password
            ? user.confirm_password
            : userFind.confirm_password,
        adress_id: user.adress_id ? user.adress_id : userFind.adress_id,
    });

    const userReturned = await userRepository.findOneBy({
        id,
    });

    return userReturned!;
};

export default userUpdateService;