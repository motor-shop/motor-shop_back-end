import { Router } from "express";

import userCreateController from "../controllers/users/usersCreate.controller";
import userUpdateController from "../controllers/users/userUpdate.controller";

const usersRoutes = Router();

usersRoutes.post("", userCreateController);
usersRoutes.patch("", userUpdateController);

export default usersRoutes;
