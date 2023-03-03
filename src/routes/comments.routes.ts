import { Router } from "express";
import commentCreateController from "../controllers/comments/commentCreate.controller";

const commentsRoutes = Router();

commentsRoutes.post("/comments/:idUser", (req, res, next) => {
    commentCreateController(req, res);
});

export default commentsRoutes;
