import { Request, Response, Router } from "express";
import sessionController from "../controllers/login/session.controller";

const sessionRoutes = Router();

sessionRoutes.post("/login", (req: Request, res: Response) => {
    /* 	#swagger.tags = ['Login']
    #swagger.summary = 'Realizar login de usuário'
    #swagger.description = 'Este endpoint realiza o login do usuário retornando o token de acesso.' */

    /*	#swagger.parameters['obj'] = {
        in: 'body',
        description: 'Informações para login.',
        required: true,
        schema: { $ref: "#/definitions/Login" }
    } */

    /* #swagger.security = [{
        "apiKeyAuth": []
    }] */

    /* #swagger.responses[200] = {
        description: 'Logado com sucesso.',
        schema: { $ref: "#/definitions/Token" }
    } */

    /* #swagger.responses[404] = {
        description: 'Exemplo de erro:',
        schema: { $ref: "#/definitions/ErrorLogin" }
    } */
    sessionController(req, res);
});

export default sessionRoutes;
