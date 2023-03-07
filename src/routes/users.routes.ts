import { Router } from "express";
import resetPasswordController from "../controllers/password/resetPassword.controller";
import sendResetPasswordController from "../controllers/password/sendResetPassword.controller";
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
usersRoutes.post("/users/sendResetPassword", (req, res, next) => {
    sendResetPasswordController(req, res);
});
usersRoutes.post("/users/resetPassword", (req, res, next) => {
    resetPasswordController(req, res);
});

export default usersRoutes;
