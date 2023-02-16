import { Router } from "express";

import userCreateController from "../controllers/users/usersCreate.controller";
import usersListController from "../controllers/users/usersList.controller";

const usersRoutes = Router();

usersRoutes.post("", userCreateController);
usersRoutes.get("", usersListController);

export default usersRoutes;
