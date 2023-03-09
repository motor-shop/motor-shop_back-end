import AppDataSource from "../../data-source";
import { Advert } from "../../entities/advert.entity";
import { Comment } from "../../entities/comment.entity";
import { AppError } from "../../errors/AppErrors";

const commentsListByAdvertService = async (
    idAdvert: string
): Promise<Comment[]> => {
    const commentsRepository = AppDataSource.getRepository(Comment);
    const advertsRepository = AppDataSource.getRepository(Advert);

    const advert = await advertsRepository.findOne({
        where: { id: idAdvert },
    });

    if (!advert) throw new AppError(404, "Advert not found");

    const comments = await commentsRepository.find({
        where: { advert: advert },
    });

    return comments;
};

export default commentsListByAdvertService;
