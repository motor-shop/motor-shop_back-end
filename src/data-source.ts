import { DataSource } from "typeorm";
import "dotenv/config";
import { User } from "./entities/user.entity";
import { Adress } from "./entities/adress.entity";
import { initialMigration1676392522610 } from "./migrations/1676392522610-initialMigration";

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: String(process.env.POSTGRES_USER),
    password: String(process.env.POSTGRES_PASSWORD),
    database: String(process.env.POSTGRES_DB),
    synchronize: false,
    logging: true,
    entities: ["src/entities/*.ts"],
    migrations: ["src/migrations/*.ts"],
});

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source initialized");
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err);
    });

export default AppDataSource;
