import { Router } from "express";
import resetPasswordController from "../controllers/password/resetPassword.controller";
import sendResetPasswordController from "../controllers/password/sendResetPassword.controller";
import userCreateController from "../controllers/users/usersCreate.controller";
import usersDeleteController from "../controllers/users/usersDelete.controller";
import usersListController from "../controllers/users/usersList.controller";
import usersListByIdController from "../controllers/users/usersListById.controller";
import userUpdateController from "../controllers/users/userUpdate.controller";
import authUserMiddleware from "../middlewares/authUser.middleware";
import authUserLoggedMiddleware from "../middlewares/authUserLogged.middleware";

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
    authUserMiddleware(req, res, next);
    authUserLoggedMiddleware(req, res, next);
    if (!res.headersSent) {
        userUpdateController(req, res);
    }
});
usersRoutes.get("/users", (req, res, next) => {
    usersListController(req, res);
});
usersRoutes.post("/users/sendResetPassword", (req, res, next) => {
    sendResetPasswordController(req, res);
});
usersRoutes.post("/users/resetPassword", (req, res, next) => {
    resetPasswordController(req, res);
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
    authUserLoggedMiddleware(req, res, next);
    if (!res.headersSent) {
        usersDeleteController(req, res);
    }
});

usersRoutes.get("/users/:id", (req, res, next) => {
    authUserMiddleware(req, res, next);
    authUserLoggedMiddleware(req, res, next);
    if (!res.headersSent) {
        usersListByIdController(req, res);
    }
});

export default usersRoutes;
