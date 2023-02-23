import AppDataSource from "../../data-source";
import { Advert } from "../../entities/advert.entity";
import { AppError } from "../../errors/AppErrors";
import { IAdvertUpdate } from "../../interfaces/adverts";

const advertUpdateService = async (
    updateFields: IAdvertUpdate,
    id: string
): Promise<Advert> => {
    const advertRepository = AppDataSource.getRepository(Advert);

    const advert = await advertRepository.findOneBy({ id });

    if (!advert || !advert.is_active) {
        throw new AppError(404, "Advert not found.");
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

    if (updateFields.hasOwnProperty("is_active")) {
        advert.is_active = updateFields.is_active!;
    }

    const updatedAdvert = await advertRepository.save(advert);

    return updatedAdvert;
};

export default advertUpdateService;
