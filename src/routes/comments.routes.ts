import { Router } from "express";
import commentCreateController from "../controllers/comments/commentCreate.controller";
import commentDeleteController from "../controllers/comments/commentDelete.controller";
import commentsListController from "../controllers/comments/commentsList.controller";
import commentsListByAdvertController from "../controllers/comments/commentsListByAdvert.controller";
import commentUpdateController from "../controllers/comments/commentUpdate.controller";
import authUserMiddleware from "../middlewares/authUser.middleware";

const commentsRoutes = Router();

commentsRoutes.post("/comments", (req, res, next) => {
    authUserMiddleware(req, res, next);
    if (!res.headersSent) {
        commentCreateController(req, res);
    }
});

commentsRoutes.get("/comments", (req, res, next) => {
    commentsListController(req, res);
});

commentsRoutes.get("/comments/:idAdvert", (req, res, next) => {
    commentsListByAdvertController(req, res);
});

commentsRoutes.patch("/comments/:id", (req, res, next) => {
    authUserMiddleware(req, res, next);
    if (!res.headersSent) {
        commentUpdateController(req, res);
    }
});

commentsRoutes.delete("/comments/:id", (req, res, next) => {
    authUserMiddleware(req, res, next);
    if (!res.headersSent) {
        commentDeleteController(req, res);
    }
});

export default commentsRoutes;
