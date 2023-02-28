import { compare } from "bcryptjs";
import AppDataSource from "../../data-source";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppErrors";

interface ISessionRequest {
    email: string;
    password: string;
}

interface IPropsSessionService {
    data: ISessionRequest;
}

const sessionService = async ({ data }: IPropsSessionService) => {
    const userRepository = AppDataSource.getRepository(User);

    const userExists = await userRepository.findOneBy({
        email: data.email,
    });

    if (!userExists) {
        throw new AppError(404, "Invalid email or password");
    }

    const validPassword = await compare(data.password, userExists.password);

    if (!validPassword) {
        throw new AppError(404, "Invalid email or password");
    }

    const token = jwt.sign(
        { email: userExists.email },
        process.env.SECRET_KEY as string,
        { expiresIn: "24h", subject: userExists.id }
    );

    return token;
};

export default sessionService;
