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
    },
};
