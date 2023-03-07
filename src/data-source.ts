import { DataSource } from "typeorm";
import "dotenv/config";
import { User } from "./entities/user.entity";
import { Adress } from "./entities/adress.entity";
import { initialMigration1676392522610 } from "./migrations/1676392522610-initialMigration";
import { Advert } from "./entities/advert.entity";
import { Image } from "./entities/image.entity";
import { Comment } from "./entities/comment.entity";
import { createTables1678200540353 } from "./migrations/1678200540353-createTables";

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: String(process.env.POSTGRES_USER),
    password: String(process.env.POSTGRES_PASSWORD),
    database: String(process.env.POSTGRES_DB),
    synchronize: false,
    logging: true,
    entities: [User, Adress, Advert, Image, Comment],
    migrations: [initialMigration1676392522610, createTables1678200540353 ],
});

(async () => {
    await AppDataSource.initialize()
        .then(() => {
            console.log("Data Source initialized");
        })
        .catch((err) => {
            console.error("Error during Data Source initialization", err);
        });
})();

export default AppDataSource;
