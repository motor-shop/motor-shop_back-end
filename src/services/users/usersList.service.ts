import AppDataSource from "../../data-source";
import { Adress } from "../../entities/adress.entity";
import { User } from "../../entities/user.entity";

const usersListService = async () => {
    const userRepository = AppDataSource.getRepository(User);
    const users = await userRepository.find();

    const output: Partial<User>[] = [];

    users.map((user) => {
        const newUser: Partial<User> = {
            id: user.id,
            username: user.username,
            email: user.email,
            cpf: user.cpf,
            cellphone: user.cellphone,
            birth_at: user.birth_at,
            description: user.description,
            is_seller: user.is_seller,
            adress_id: user.adress_id,
        };

        output.push(newUser);
    });

    return output;
};

export default usersListService;
