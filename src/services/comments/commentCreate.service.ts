import AppDataSource from "../../data-source";
import { Advert } from "../../entities/advert.entity";
import { Comment } from "../../entities/comment.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppErrors";
import { ICommentRequest } from "../../interfaces/comments";

const commentCreateService = async (
    data: ICommentRequest,
    idUser: string
): Promise<Comment> => {
    const advertRepository = AppDataSource.getRepository(Advert);
    const usersRepository = AppDataSource.getRepository(User);
    const commentsRepository = AppDataSource.getRepository(Comment);

    if (!data.hasOwnProperty("comment")) {
        throw new AppError(400, "chave comment é obrigatoria");
    }
    if (!data.hasOwnProperty("advertId")) {
        throw new AppError(400, "chave advertId é obrigatoria");
    }

    const user = await usersRepository.findOne({
        where: { id: idUser },
    });

    const advert = await advertRepository.findOne({
        where: { id: data.advertId },
    });

    if (!user) {
        throw new AppError(404, "user not found");
    }

    if (!advert) {
        throw new AppError(404, "advert not found");
    }

    const newComment = commentsRepository.create({
        comment: data.comment,
        created_at: new Date(),
        advert: advert,
        user: user,
    });

    await commentsRepository.save(newComment);

    const commentCreated = await commentsRepository.findOne({
        where: { id: newComment.id },
    });

    if (!commentCreated) {
        throw new AppError(404, "error not created");
    }

    return commentCreated;
};

export default commentCreateService;
