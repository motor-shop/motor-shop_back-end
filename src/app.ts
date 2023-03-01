import express from "express";

import usersRoutes from "./routes/users.routes";
import handleError from "./errors/handleError";
import swaggerAutogen from "swagger-autogen";
import { doc, endpointsFiles, outputFile } from "./swagger";
import advertsRoutes from "./routes/adverts.routes";
import cors from "cors";

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

    app.use("", usersRoutes, advertsRoutes);

    app.listen(3001, () => {
        console.log("Server is running on port 3000");
    });
});
