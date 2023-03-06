import { Request, Response, Router } from "express";
import addressUpdateController from "../controllers/address/addressUpdate.controller";
import authUserMiddleware from "../middlewares/authUser.middleware";

const addressRoutes = Router();

addressRoutes.patch("/address/:id", (req, res, next) => {
    /* 	#swagger.tags = ['Adress']
    #swagger.summary = 'atualiza endereço do usuário'
    #swagger.description = 'Este endpoint atualiza endereço do usuário com as informações fornecidas no payload da requisição.' */

    /*	#swagger.parameters['obj'] = {
        in: 'body',
        description: 'Informações para atualização.',
        required: true,
        schema: { $ref: "#/definitions/Advert" }
    } */

    /* #swagger.security = [{
        "apiKeyAuth": []
    }] */

    /* #swagger.responses[201] = {
        description: 'Endereço atualizado com sucesso.',
        schema: { $ref: "#/definitions/Advert" }
    } */

    /* #swagger.responses[400] = {
        description: 'Exemplo de erro:',
        schema: { $ref: "#/definitions/ErrorKeysCreate" }
    } */
    authUserMiddleware(req, res, next);
    if (!res.headersSent) {
        addressUpdateController(req, res);
    }
});

export default addressRoutes;
