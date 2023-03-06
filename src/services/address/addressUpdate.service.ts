import AppDataSource from "../../data-source";
import { Adress } from "../../entities/adress.entity";
import { AppError } from "../../errors/AppErrors";
import { IAddressUpdate } from "../../interfaces/users/userUpdate";

const addressUpdateService = async (id: string, address: IAddressUpdate): Promise<Adress> => {
    
    const addressRepository = AppDataSource.getRepository(Adress);
    const addressFind = await addressRepository.findOneBy({
        id,
    });

    if (!addressFind) {
        throw new AppError(404, "Address not found");
    }

    await addressRepository.update(id, {
        zip_code: address.zip_code ? address.zip_code : addressFind.zip_code,
        state: address.state ? address.state : addressFind.state,
        city: address.city ? address.city : addressFind.city,
        street: address.street ? address.street : addressFind.street,
        house_number: address.house_number ? address.house_number : addressFind.house_number,
        complement: address.complement ? address.complement : addressFind.complement,
    });

    const userReturned = await addressRepository.findOneBy({
        id,
    });

    return userReturned!;
};

export default addressUpdateService;
