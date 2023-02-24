import AppDataSource from "../../data-source";
import { Advert } from "../../entities/advert.entity";

const advertListOneService = async (id: string) => {
    const advertRepository = AppDataSource.getRepository(Advert);
    const advert = await advertRepository.find({
        where: { id: id },
        relations: { images: true },
    });
    return advert;
};
export default advertListOneService;
