import AppDataSource from "../../data-source";
import { Advert } from "../../entities/advert.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppErrors";
import { IAdvertUpdate } from "../../interfaces/adverts";

const advertUpdateService = async (
    updateFields: IAdvertUpdate,
    id: string,
    id_user: string
): Promise<Advert> => {
    const advertRepository = AppDataSource.getRepository(Advert);
    const userRepository = AppDataSource.getRepository(User);

    const userLogged = await userRepository.findOneBy({ id: id_user });

    if (!userLogged) {
        throw new AppError(404, "User not logged");
    }
    console.log(id);
    const advert = await advertRepository.findOne({
        where: { id },
        relations: { user: true },
    });

    if (!advert) {
        throw new AppError(404, "Advert not found.");
    }

    if (advert.user.id !== userLogged.id) {
        throw new AppError(401, "it is only possible to update your ads");
    }

    if (updateFields.hasOwnProperty("is_selling")) {
        advert.is_selling = updateFields.is_selling!;
    }

    if (updateFields.hasOwnProperty("title")) {
        advert.title = updateFields.title!;
    }

    if (updateFields.hasOwnProperty("year")) {
        advert.year = updateFields.year!;
    }

    if (updateFields.hasOwnProperty("km")) {
        advert.km = updateFields.km!;
    }

    if (updateFields.hasOwnProperty("price")) {
        advert.price = updateFields.price!;
    }

    if (updateFields.hasOwnProperty("description")) {
        advert.description = updateFields.description!;
    }

    if (updateFields.hasOwnProperty("is_car")) {
        advert.is_car = updateFields.is_car!;
    }

    if (updateFields.hasOwnProperty("cover_image")) {
        advert.cover_image = updateFields.cover_image!;
    }

    const updatedAdvert = await advertRepository.save(advert);

    return updatedAdvert;
};

export default advertUpdateService;
