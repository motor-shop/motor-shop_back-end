import { Router } from "express";

import advertCreateController from "../controllers/adverts/advertCreate.controler";
import advertDeleteController from "../controllers/adverts/advertDelete.controller";
import advertGetByUserController from "../controllers/adverts/advertGetByUser.controller";
import advertUpdateController from "../controllers/adverts/advertUpdate.controller";

const advertsRoutes = Router();

advertsRoutes.post("/adverts", (req, res, next) => {
    advertCreateController(req, res);
});

advertsRoutes.patch("/adverts/:id", (req, res, next) => {
    advertUpdateController(req, res);
});

advertsRoutes.delete("/adverts/:id", (req, res, next) => {
    advertDeleteController(req, res);
});

advertsRoutes.get("/adverts/user/:id", (req, res, next) => {
    advertGetByUserController(req, res);
});

export default advertsRoutes;
