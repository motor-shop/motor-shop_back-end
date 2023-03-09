import AppDataSource from "../../data-source";
import { Advert } from "../../entities/advert.entity";

const advertListService = async () => {
    const advertRepository = AppDataSource.getRepository(Advert);
    const adverts = await advertRepository.find({
        relations: { images: true, user: true },
    });
    const advertsTrated = adverts.map((advert) => {
        return {
            ...advert,
            user: { username: advert.user.username, id: advert.user.username },
        };
    });
    return advertsTrated;
};
export default advertListService;
