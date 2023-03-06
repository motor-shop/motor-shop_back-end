export interface IAdress {
    id: string;
    zip_code: string;
    state: string;
    city: string;
    street: string;
    house_number: number;
    complement: string;
}

export interface IUserUpdate {
    username?: string;
    email?: string;
    cpf?: string;
    cellphone?: string;
    birth_at: Date;
    description?: string;
    password?: string;
    confirm_password?: string;
    adress_id?: IAdress;
}
