import AppDataSource from "../../data-source";
import { Comment } from "../../entities/comment.entity";

const commentsListService = async (): Promise<Comment[]> => {
    const commentsRepository = AppDataSource.getRepository(Comment);

    const comments = await commentsRepository.find();

    return comments;
};

export default commentsListService;
