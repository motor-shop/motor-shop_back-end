export interface IAdvertRequest {
    title: string;
    year: number;
    km: number;
    price: number;
    description: string;
    is_car: boolean;
    cover_image: string;
    is_active: boolean;
    images: Array<string>;
}

export interface IAdvertUpdate {
    title?: string;
    year?: number;
    km?: number;
    price?: number;
    description?: string;
    is_car?: boolean;
    cover_image?: string;
    is_active?: boolean;
    images?: Array<string>;
    is_selling?: boolean;
}
