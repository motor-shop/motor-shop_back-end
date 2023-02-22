import { Router } from "express";

import userCreateController from "../controllers/users/usersCreate.controller";
import usersListController from "../controllers/users/usersList.controller";
import userUpdateController from "../controllers/users/userUpdate.controller";

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

export default usersRoutes;
