import AppDataSource from "../../data-source";
import { Advert } from "../../entities/advert.entity";
import { User } from "../../entities/user.entity";

const advertGetByUserService = async (id: string): Promise<Array<Advert>> => {
    const advertRepository = AppDataSource.getRepository(Advert);
    const fullAdverts = await advertRepository.find({
        relations: { images: true },
    });
    return fullAdverts;

    // descomentar esse codigo abaixo ao implementar a logica de cadastrar anuncios vinculados a um usuario
    // Após isso retornar o adverts ao invés de fullAdverts, podendo assim remover a linha 10 e 11.
    // const userRepository = AppDataSource.getRepository(User)
    // const {adverts} = await userRepository.findOne({
    //     where: {id},
    //     relations: {adverts: true}
    // })
    // const advertsFiltered = adverts.filter((advert) => (advert.is_active === true))
    // return advertsFiltered
};

export default advertGetByUserService;
