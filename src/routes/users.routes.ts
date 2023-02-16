import { Router } from "express";

import userCreateController from "../controllers/users/usersCreate.controller";

const usersRoutes = Router();

usersRoutes.post("", userCreateController);

export default usersRoutes;
