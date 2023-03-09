import AppDataSource from "../../data-source";
import { Comment } from "../../entities/comment.entity";
import { AppError } from "../../errors/AppErrors";

const commentDeleteService = async (idComment: string): Promise<void> => {
    const commentsRepository = AppDataSource.getRepository(Comment);

    const comment = await commentsRepository.findOne({
        where: { id: idComment },
    });

    if (!comment) throw new AppError(404, "Comment not found");

    await commentsRepository.delete({ id: idComment });
};

export default commentDeleteService;
