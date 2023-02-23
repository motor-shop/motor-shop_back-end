import AppDataSource from "../../data-source";
import { Advert } from "../../entities/advert.entity";
import { Image } from "../../entities/image.entity";
import { AppError } from "../../errors/AppErrors";
import { IAdvertRequest } from "../../interfaces/adverts";

const advertCreateService = async (data: IAdvertRequest): Promise<Advert> => {
    const advertRepository = AppDataSource.getRepository(Advert);
    const imageRepository = AppDataSource.getRepository(Image);

    if (!data.hasOwnProperty("images")) {
        throw new AppError(400, "chave images é obrigatoria");
    }
    if (typeof data.images[0] !== "string") {
        throw new AppError(400, "a url da imagem deve ser uma string");
    }
    if (!data.hasOwnProperty("title")) {
        throw new AppError(400, "chave title é obrigatoria");
    }
    if (!data.hasOwnProperty("year")) {
        throw new AppError(400, "chave year é obrigatoria");
    }
    if (!data.hasOwnProperty("km")) {
        throw new AppError(400, "chave km é obrigatoria");
    }
    if (!data.hasOwnProperty("price")) {
        throw new AppError(400, "chave price é obrigatoria");
    }
    if (!data.hasOwnProperty("description")) {
        throw new AppError(400, "chave description é obrigatoria");
    }
    if (!data.hasOwnProperty("is_car")) {
        throw new AppError(400, "chave is_car é obrigatoria");
    }
    if (!data.hasOwnProperty("cover_image")) {
        throw new AppError(400, "chave cover_image é obrigatoria");
    }
    if (!data.hasOwnProperty("is_selling")) {
        throw new AppError(400, "chave is_selling é obrigatoria");
    }

    const newAdvert = advertRepository.create({
        is_selling: data.is_selling,
        title: data.title,
        year: data.year,
        km: data.km,
        price: data.price,
        description: data.description,
        is_car: data.is_car,
        cover_image: data.cover_image,
        is_active: data.is_active,
    });

    await advertRepository.save(newAdvert);

    await Promise.all(
        data.images.map(async (image) => {
            await imageRepository.save({ url: image, advert: newAdvert });
        })
    );

    const advertCreated = await advertRepository.findOne({
        where: { id: newAdvert.id },
        relations: { images: true },
    });

    if (!advertCreated) {
        throw new AppError(404, "error not created");
    }

    return advertCreated;
};

export default advertCreateService;
