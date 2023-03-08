import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppErrors";

const usersListByIdService = async (id: string) => {
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOneBy({ id });

    if (!user) {
        throw new AppError(404, "user not found");
    }

    return user;
};

export default usersListByIdService;
