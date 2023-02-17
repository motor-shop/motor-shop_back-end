import { Router } from "express";

import userCreateController from "../controllers/users/usersCreate.controller";
import usersListController from "../controllers/users/usersList.controller";
import userUpdateController from "../controllers/users/userUpdate.controller";

const usersRoutes = Router();

usersRoutes.post("", userCreateController);
usersRoutes.patch("", userUpdateController);
usersRoutes.get("", usersListController);

export default usersRoutes;
