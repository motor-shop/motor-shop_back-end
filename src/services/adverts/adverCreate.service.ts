import AppDataSource from "../../data-source";
import { Advert } from "../../entities/advert.entity";
import { Image } from "../../entities/image.entity";
import { AppError } from "../../errors/AppErrors";
import { IAdvertRequest } from "../../interfaces/adverts";

const advertCreateService = async (data: IAdvertRequest): Promise<Advert> => {
    const advertRepository = AppDataSource.getRepository(Advert);
    const imageRepository = AppDataSource.getRepository(Image);

    const createdImages: Array<Image> = [];

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

    data.images.map((image) => {
        const newImage = imageRepository.create({ url: image });
        createdImages.push(newImage);
    });

    imageRepository.save(createdImages);

    const newAdvert = advertRepository.create({
        is_selling: true,
        title: data.title,
        year: data.year,
        km: data.km,
        price: data.price,
        description: data.description,
        is_car: data.is_car,
        cover_image: data.cover_image,
        is_active: data.is_active,
        images: createdImages,
    });
    await advertRepository.save(newAdvert);

    return newAdvert;
};

export default advertCreateService;
