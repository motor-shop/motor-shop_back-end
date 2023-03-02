import { compare } from "bcryptjs";
import AppDataSource from "../../data-source";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppErrors";

interface ISessionRequest {
    username: string;
    password: string;
}

interface IPropsSessionService {
    data: ISessionRequest;
}

const sessionService = async ({ data }: IPropsSessionService) => {
    const userRepository = AppDataSource.getRepository(User);
    if (!data.username || !data.password) {
        throw new AppError(404, "Invalid username or password");
    }
    const userExists = await userRepository.findOneBy({
        username: data.username,
    });
    console.log(data);
    if (!userExists) {
        throw new AppError(404, "Invalid username or password");
    }

    const validPassword = await compare(data.password, userExists.password);

    if (!validPassword) {
        throw new AppError(404, "Invalid username or password");
    }

    const token = jwt.sign(
        { email: userExists.email },
        process.env.SECRET_KEY as string,
        { expiresIn: "24h", subject: userExists.id }
    );

    return token;
};

export default sessionService;
