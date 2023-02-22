import { Router } from "express";

import advertCreateController from "../controllers/adverts/advertCreate.controler";

const advertsRoutes = Router();

advertsRoutes.post("/adverts", (req, res, next) => {
    advertCreateController(req, res);
});

export default advertsRoutes;
