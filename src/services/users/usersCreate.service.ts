import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { Adress } from "../../entities/adress.entity";

import * as bcrypt from "bcrypt";

import { IUserRequest, IUser } from "../../interfaces/users";
import { AppError } from "../../errors/AppErrors";

const userCreateService = async ({
    username,
    email,
    cpf,
    cellphone,
    birth_at,
    description,
    password,
    confirm_password,
    adress,
}: IUserRequest): Promise<IUser> => {
    const userRepository = AppDataSource.getRepository(User);
    const adressRepository = AppDataSource.getRepository(Adress);

    const user = await userRepository.find({
        where: {
            email: email,
        },
    });

    if (user.length !== 0) {
        throw new AppError(409, "E-mail already registered");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const hashedconfirmPassword = await bcrypt.hash(confirm_password, 10);

    const is_seller = false; // Por padrão, o usuário é criado com is_seller === false.

    const newAdress = adressRepository.create(adress);

    await adressRepository.save(newAdress);

    const newUser = userRepository.create({
        username,
        email,
        cpf,
        cellphone,
        birth_at,
        description,
        password: hashedPassword,
        confirm_password: hashedconfirmPassword,
        is_seller,
        adress: newAdress,
        token_reset_password: "",
    });

    await userRepository.save(newUser);

    return newUser;
};

export default userCreateService;
