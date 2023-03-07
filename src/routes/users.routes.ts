import { Router } from "express";

import userCreateController from "../controllers/users/usersCreate.controller";
import usersDeleteController from "../controllers/users/usersDelete.controller";
import usersListController from "../controllers/users/usersList.controller";
import userUpdateController from "../controllers/users/userUpdate.controller";
import authUserMiddleware from "../middlewares/authUser.middleware";

const usersRoutes = Router();

usersRoutes.post("/users", (req, res, next) => {
    /* 	#swagger.tags = ['User']
    #swagger.description = 'Criar um novo usuário.' */

    /*	#swagger.parameters['obj'] = {
        in: 'body',
        description: 'Informações para criação.',
        required: true,
        schema: { $ref: "#/definitions/User" }
    } */

    /* #swagger.security = [{
        "apiKeyAuth": []
    }] */

    /* #swagger.responses[201] = {
        description: 'Usuário criado.',
        schema: { $ref: "#/definitions/UserNotPassword" }
    } */

    /* #swagger.responses[400] = {
        description: 'Invalid request.'
    } */

    userCreateController(req, res);
});

usersRoutes.patch("/users/:id", (req, res, next) => {
    userUpdateController(req, res);
});
usersRoutes.get("/users", (req, res, next) => {
    usersListController(req, res);
});

usersRoutes.delete("/users/:id", (req, res, next) => {
    /* 	#swagger.tags = ['User']
    #swagger.summary = 'deleta um usuário e todos seu anúncios'
    #swagger.description = 'Este endpoint deleta um usuário pelo id fornecido na url' */

    /* #swagger.security = [{
        "apiKeyAuth": []
    }] */

    /* #swagger.responses[204] = {
        description: 'Usúario deletado com sucesso.',
    } */

    /* #swagger.responses[400] = {
        description: 'Usuário não existe:',
        schema: { $ref: "#/definitions/ErrorKeysCreate" }
    } */
    authUserMiddleware(req, res, next);
    if (!res.headersSent) {
        usersDeleteController(req, res);
    }
});

export default usersRoutes;
