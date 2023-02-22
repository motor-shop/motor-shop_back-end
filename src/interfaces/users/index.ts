import { Adress } from "../../entities/adress.entity";
import { Advert } from "../../entities/advert.entity";

export interface IUser {
    id: string;
    username: string;
    email: string;
    cpf: string;
    cellphone: string;
    birth_at: Date;
    description: string;
    password: string;
    confirm_password: string;
    is_seller: boolean;
    adress_id: Adress;
    // adverts: Advert[];
}

export interface IUserRequest {
    username: string;
    email: string;
    cpf: string;
    cellphone: string;
    birth_at: Date;
    description: string;
    password: string;
    confirm_password: string;
    is_seller: boolean;
    adress: Adress;
}
