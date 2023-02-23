import path from "path";
import swaggerAutogen from "swagger-autogen";

export const outputFile = path.join(__dirname, "swagger_output.json");
export const endpointsFiles = ["./routes/*"];

export const doc = {
    info: {
        title: "API Title",
        description: "API Description",
        version: "1.0.0",
    },
    host: "localhost:3000",
    basePath: "/",
    definitions: {
        User: {
            type: "object",
            properties: {
                id: {
                    type: "string",
                    example: "123e4567-e89b-12d3-a456-426614174000",
                },
                username: {
                    type: "string",
                    maxLength: 50,
                    example: "johndoe",
                },
                email: {
                    type: "string",
                    maxLength: 100,
                    format: "email",
                    example: "johndoe@example.com",
                },
                cpf: {
                    type: "string",
                    maxLength: 14,
                    example: "123.456.789-01",
                },
                cellphone: {
                    type: "string",
                    maxLength: 50,
                    example: "+1 555-555-5555",
                },
                birth_at: {
                    type: "string",
                    format: "date",
                    example: "1990-01-01",
                },
                description: {
                    type: "string",
                    maxLength: 250,
                    example: "Lorem ipsum dolor sit amet",
                },
                password: {
                    type: "string",
                    example: "password",
                },
                confirm_password: {
                    type: "string",
                    example: "password",
                },
                is_seller: {
                    type: "boolean",
                    example: false,
                },
                adress_id: {
                    type: "string",
                    example: "123e4567-e89b-12d3-a456-426614174000",
                },
                adverts: {
                    type: "string",
                    example: "some-adverts",
                },
            },
            required: [
                "id",
                "username",
                "email",
                "cpf",
                "cellphone",
                "birth_at",
                "description",
                "password",
                "confirm_password",
                "is_seller",
                "adress_id",
            ],
        },
        UserNotPassword: {
            type: "object",
            properties: {
                id: {
                    type: "string",
                    example: "123e4567-e89b-12d3-a456-426614174000",
                },
                username: {
                    type: "string",
                    maxLength: 50,
                    example: "johndoe",
                },
                email: {
                    type: "string",
                    maxLength: 100,
                    format: "email",
                    example: "johndoe@example.com",
                },
                cpf: {
                    type: "string",
                    maxLength: 14,
                    example: "123.456.789-01",
                },
                cellphone: {
                    type: "string",
                    maxLength: 50,
                    example: "+1 555-555-5555",
                },
                birth_at: {
                    type: "string",
                    format: "date",
                    example: "1990-01-01",
                },
                description: {
                    type: "string",
                    maxLength: 250,
                    example: "Lorem ipsum dolor sit amet",
                },
                is_seller: {
                    type: "boolean",
                    example: false,
                },
                adress_id: {
                    type: "string",
                    example: "123e4567-e89b-12d3-a456-426614174000",
                },
                adverts: {
                    type: "string",
                    example: "some-adverts",
                },
            },
            required: [
                "id",
                "username",
                "email",
                "cpf",
                "cellphone",
                "birth_at",
                "description",
                "is_seller",
                "adress_id",
            ],
        },
        Advert: {
            type: "object",
            properties: {
                id: {
                    type: "string",
                    example: "123e4567-e89b-12d3-a456-426614174000",
                },
                is_selling: {
                    type: "boolean",
                    example: true,
                },
                title: {
                    type: "string",
                    maxLength: 50,
                    example: "Selling my car",
                },
                year: {
                    type: "integer",
                    example: 2022,
                },
                km: {
                    type: "integer",
                    example: 50000,
                },
                price: {
                    type: "number",
                    format: "float",
                    example: 10000.0,
                },
                description: {
                    type: "string",
                    maxLength: 200,
                    example: "Lorem ipsum dolor sit amet",
                },
                is_car: {
                    type: "boolean",
                    example: true,
                },
                cover_image: {
                    type: "string",
                    example: "https://example.com/image.png",
                },
                is_active: {
                    type: "boolean",
                    example: true,
                },
                images: {
                    type: "array",
                    items: {
                        $ref: "#/definitions/Image",
                    },
                },
            },
            required: [
                "is_selling",
                "title",
                "year",
                "km",
                "price",
                "description",
                "is_car",
                "cover_image",
                "is_active",
                "images",
            ],
        },
        Image: {
            type: "object",
            properties: {
                id: {
                    type: "string",
                    example: "123e4567-e89b-12d3-a456-426614174000",
                },
                url: {
                    type: "string",
                    example: "https://example.com/image.png",
                },
                advert: {
                    $ref: "#/definitions/Advert",
                },
            },
            required: ["url"],
        },
        ErrorKeysCreate: {
            type: "object",
            properties: {
                status: {
                    type: "string",
                    example: "error",
                },
                message: {
                    type: "string",
                    example: "chave {nome-da-chave} é obrigatoria.",
                },
            },
        },
    },
};
