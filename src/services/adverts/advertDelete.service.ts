import AppDataSource from "../../data-source";
import { Advert } from "../../entities/advert.entity";
import { Comment } from "../../entities/comment.entity";
import { Image } from "../../entities/image.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppErrors";

const advertDeleteService = async (id: string, id_user: string) => {
    const userRepository = AppDataSource.getRepository(User);
    const advertRepository = AppDataSource.getRepository(Advert);
    const imageRepository = AppDataSource.getRepository(Image);
    const commentRepository = AppDataSource.getRepository(Comment);

    const userLogged = await userRepository.findOneBy({ id: id_user });

    if (!userLogged) {
        throw new AppError(404, "User not logged");
    }
    const deleteAdvert = await advertRepository.findOne({
        where: { id },
        relations: { images: true, comments: true },
    });

    if (!deleteAdvert) {
        throw new AppError(404, "advert to delete not found");
    }

    deleteAdvert.images.map(async (image) => {
        await imageRepository.delete(image.id);
    });

    deleteAdvert.comments.map(async (comment) => {
        await commentRepository.delete(comment.id);
    });

    await advertRepository.delete(deleteAdvert.id);
};

export default advertDeleteService;
