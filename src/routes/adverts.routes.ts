import { Router } from "express";

import advertCreateController from "../controllers/adverts/advertCreate.controler";
import advertDeleteController from "../controllers/adverts/advertDelete.controller";
import advertGetByUserController from "../controllers/adverts/advertGetByUser.controller";
import advertListController from "../controllers/adverts/advertList.controller";
import advertListOneController from "../controllers/adverts/advertListOne.controller";
import advertUpdateController from "../controllers/adverts/advertUpdate.controller";
import authUserMiddleware from "../middlewares/authUser.middleware";

const advertsRoutes = Router();

advertsRoutes.post("/adverts", (req, res, next) => {
    /* 	#swagger.tags = ['Advert']
    #swagger.summary = 'Cria um novo anúncio de venda de veiculos'
    #swagger.description = 'Este endpoint cria um novo anúncio de venda de veiculos com as informações fornecidas no payload da requisição.' */

    /*	#swagger.parameters['obj'] = {
        in: 'body',
        description: 'Informações para criação.',
        required: true,
        schema: { $ref: "#/definitions/Advert" }
    } */

    /* #swagger.security = [{
        "apiKeyAuth": []
    }] */

    /* #swagger.responses[201] = {
        description: 'Anúncio criado com sucesso.',
        schema: { $ref: "#/definitions/Advert" }
    } */

    /* #swagger.responses[400] = {
        description: 'Exemplo de erro:',
        schema: { $ref: "#/definitions/ErrorKeysCreate" }
    } */

    authUserMiddleware(req, res, next);
    if (!res.headersSent) {
        advertCreateController(req, res);
    }
});

advertsRoutes.patch("/adverts/:id", (req, res, next) => {
    /* 	#swagger.tags = ['Advert']
    #swagger.summary = 'atualiza um anúncio de venda de veiculos'
    #swagger.description = 'Este endpoint atualiza um anúncio de veiculos com as informações fornecidas no payload da requisição.' */

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
        description: 'Anúncio atualizado com sucesso.',
        schema: { $ref: "#/definitions/Advert" }
    } */

    /* #swagger.responses[400] = {
        description: 'Exemplo de erro:',
        schema: { $ref: "#/definitions/ErrorKeysCreate" }
    } */
    authUserMiddleware(req, res, next);
    if (!res.headersSent) {
        advertUpdateController(req, res);
    }
});

advertsRoutes.delete("/adverts/:id", (req, res, next) => {
    /* 	#swagger.tags = ['Advert']
    #swagger.summary = 'deleta um anúncio de venda de veiculos'
    #swagger.description = 'Este endpoint deleta um anuncio pelo id fornecido na url' */

    /* #swagger.security = [{
        "apiKeyAuth": []
    }] */

    /* #swagger.responses[204] = {
        description: 'Anúncio atualizado com sucesso.',
    } */

    /* #swagger.responses[400] = {
        description: 'Anuncio não existe:',
        schema: { $ref: "#/definitions/ErrorKeysCreate" }
    } */
    authUserMiddleware(req, res, next);
    if (!res.headersSent) {
        advertDeleteController(req, res);
    }
});

advertsRoutes.get("/adverts/user", (req, res, next) => {
    /* 	#swagger.tags = ['Advert']
    #swagger.summary = 'busca de anúncios de venda de veiculos'
    #swagger.description = 'Este endpoint busca anúncios de veiculos pelo id do usuário fornecido na url' */

    /* #swagger.security = [{
        "apiKeyAuth": []
    }] */

    /* #swagger.responses[200] = {
        description: 'Busca com sucesso.',
        schema: { $ref: "#/definitions/Advert" }
    } */
    authUserMiddleware(req, res, next);
    if (!res.headersSent) {
        advertGetByUserController(req, res);
    }
});
advertsRoutes.get("/adverts", (req, res, next) => {
    /* 	#swagger.tags = ['Advert']
    #swagger.summary = 'busca de anúncios de venda de veiculos'
    #swagger.description = 'Este endpoint busca todos os anúncios de veiculos' */

    /* #swagger.security = [{
        "apiKeyAuth": []
    }] */

    /* #swagger.responses[200] = {
        description: 'Busca com sucesso.',
        schema: { $ref: "#/definitions/Advert" }
    } */

    advertListController(req, res);
});

advertsRoutes.get("/adverts/:id", (req, res, next) => {
    /* 	#swagger.tags = ['Advert']
    #swagger.summary = 'busca de anúncios de venda de veiculos'
    #swagger.description = 'Este endpoint busca o anúncio do veiculo pelo id fornecido na url' */

    /* #swagger.security = [{
        "apiKeyAuth": []
    }] */

    /* #swagger.responses[200] = {
        description: 'Busca com sucesso.',
        schema: { $ref: "#/definitions/Advert" }
    } */

    advertListOneController(req, res);
});

export default advertsRoutes;
