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
    is_seller,
    confirm_password,
    adress,
}: IUserRequest): Promise<IUser> => {
    const userRepository = AppDataSource.getRepository(User);
    const adressRepository = AppDataSource.getRepository(Adress);

    const getUserEmail = await userRepository.find({
        where: {
            email: email,
        },
    });

    if (getUserEmail.length !== 0) {
        throw new AppError(409, "E-mail already registered");
    }

    const getUserUsername = await userRepository.find({
        where: {
            username: username,
        },
    });

    if (getUserUsername.length !== 0) {
        throw new AppError(409, "username already registered");
    }

    const getUserCpf = await userRepository.find({
        where: {
            cpf: cpf,
        },
    });

    if (getUserCpf.length !== 0) {
        throw new AppError(409, "cpf already registered");
    }

    if (!username) {
        throw new AppError(400, "chave username é obrigatoria");
    }
    if (!email) {
        throw new AppError(400, "chave email é obrigatoria");
    }
    if (!cpf) {
        throw new AppError(400, "chave cpf é obrigatoria");
    }
    if (!cellphone) {
        throw new AppError(400, "chave cellphone é obrigatoria");
    }
    if (!birth_at) {
        throw new AppError(400, "chave birth_at é obrigatoria");
    }
    if (!is_seller) {
        throw new AppError(400, "chave is_seller é obrigatoria");
    }
    if (!description) {
        throw new AppError(400, "chave description é obrigatoria");
    }
    if (!is_seller && is_seller) {
        throw new AppError(400, "chave is_seller é obrigatoria");
    }
    if (!password) {
        throw new AppError(400, "chave password é obrigatoria");
    }
    if (!confirm_password) {
        throw new AppError(400, "chave confirm_password é obrigatoria");
    }
    if (!adress) {
        throw new AppError(400, "chave adress é obrigatoria");
    }
    if (!adress.city) {
        throw new AppError(400, "chave adress.city é obrigatoria");
    }
    if (!adress.zip_code) {
        throw new AppError(400, "chave adress.zip_code é obrigatoria");
    }
    if (!adress.street) {
        throw new AppError(400, "chave adress.street é obrigatoria");
    }
    if (!adress.state) {
        throw new AppError(400, "chave adress.state é obrigatoria");
    }
    if (!adress.house_number) {
        throw new AppError(400, "chave adress.house_number é obrigatoria");
    }

    if (!adress.complement) {
        throw new AppError(400, "chave adress.complement é obrigatoria");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const hashedconfirmPassword = await bcrypt.hash(confirm_password, 10);

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
