import AppDataSource from "../../data-source";
import { Adress } from "../../entities/adress.entity";
import { Advert } from "../../entities/advert.entity";
import { Comment } from "../../entities/comment.entity";
import { Image } from "../../entities/image.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppErrors";

const usersDeleteService = async (id: string, id_user: string) => {
    
    const userRepository = AppDataSource.getRepository(User);
    const advertRepository = AppDataSource.getRepository(Advert);
    const imageRepository = AppDataSource.getRepository(Image);
    const commentRepository = AppDataSource.getRepository(Comment);
    const addressRepository = AppDataSource.getRepository(Adress);

    const userLogged = await userRepository.findOneBy({ id: id_user });

    if (!userLogged) {
        throw new AppError(404, "User not logged");
    }

    const deleteAdvert = await advertRepository.find({
        where: { user: { id } },
        relations: { images: true, comments: true },
    });

    console.log(deleteAdvert);

    if (!deleteAdvert) {
        throw new AppError(404, "advert to delete not found");
    }

    deleteAdvert.map(async (advert) => {
        advert.images.map(async (image) => {
            await imageRepository.delete(image.id);
        });
        advert.comments.map(async (comment) => {
            await commentRepository.delete(comment.id);
        });
        await advertRepository.delete(advert.id);
    });

    await userRepository.delete(userLogged.id);

    await addressRepository.delete(userLogged.adress.id);
};

export default usersDeleteService;
