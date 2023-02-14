import { Router } from "express";

import exampleCreateController from "../controllers/examples/exampleCreate.controller";


import exampleMiddleware from "../middlewares/example.middleware";





const routes= Router()

routes.post("/users", exampleMiddleware, exampleCreateController)
routes.get("/users", exampleMiddleware, exampleCreateController)
routes.patch("/users/:id", exampleMiddleware, exampleCreateController)
routes.delete("/users/:id", exampleMiddleware, exampleCreateController)


export default routes