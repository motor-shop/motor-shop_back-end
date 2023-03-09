import AppDataSource from "../../data-source";
import { Comment } from "../../entities/comment.entity";
import { AppError } from "../../errors/AppErrors";
import { ICommentUpdate } from "../../interfaces/comments";

const commentUpdateService = async (
    data: ICommentUpdate,
    id: string
): Promise<Comment> => {
    const commentsRepository = AppDataSource.getRepository(Comment);

    if (!data.hasOwnProperty("comment")) {
        throw new AppError(400, "chave comment é obrigatoria");
    }

    const comment = await commentsRepository.findOne({
        where: { id: id },
    });

    if (!comment) throw new AppError(404, "Comment not found");

    await commentsRepository.update(id, {
        comment: data.comment,
    });

    const updatedComment = await commentsRepository.findOne({
        where: { id: id },
    });

    return updatedComment!;
};

export default commentUpdateService;
