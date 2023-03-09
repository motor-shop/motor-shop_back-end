import AppDataSource from "../../data-source";
import { Advert } from "../../entities/advert.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppErrors";
import { IUser, IUserResponse } from "../../interfaces/users";

interface IAdvertGetByUserProps {
    user: IUserResponse;
    adverts: Array<Advert>;
}

const advertGetByUserService = async (
    id: string
): Promise<IAdvertGetByUserProps> => {
    const advertRepository = AppDataSource.getRepository(Advert);
    const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.findOneBy({ id });

    if (!user) {
        throw new AppError(404, "User not logged");
    }

    const fullAdverts = await advertRepository.find({
        where: { user: { id } },
        relations: { images: true },
    });
    return { user, adverts: fullAdverts };
};

export default advertGetByUserService;
