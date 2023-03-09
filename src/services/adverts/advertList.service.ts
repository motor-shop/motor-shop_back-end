import AppDataSource from "../../data-source";
import { Advert } from "../../entities/advert.entity";

const advertListService = async () => {
    const advertRepository = AppDataSource.getRepository(Advert);
    const adverts = await advertRepository.find({
        relations: { images: true, user: true },
    });
    return adverts;
};
export default advertListService;
