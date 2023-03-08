import express from "express";

import usersRoutes from "./routes/users.routes";
import handleError from "./errors/handleError";
import swaggerAutogen from "swagger-autogen";
import { doc, endpointsFiles, outputFile } from "./swagger";
import advertsRoutes from "./routes/adverts.routes";
import cors from "cors";
import sessionRoutes from "./routes/session.routes";
import commentsRoutes from "./routes/comments.routes";
import addressRoutes from "./routes/address.routes";

const swaggerUi = require("swagger-ui-express");

const app = express();
app.use(cors());
app.use(express.json());

swaggerAutogen()(outputFile, endpointsFiles, doc).then(() => {
    //Routes------------------------
    app.use(
        "/api-docs",
        swaggerUi.serve,
        swaggerUi.setup(require("./swagger_output.json"))
    );

    app.use(
        "",
        usersRoutes,
        advertsRoutes,
        sessionRoutes,
        commentsRoutes,
        addressRoutes
    );

    app.listen(3001, () => {
        console.log("Server is running on port 3001");
    });
});
