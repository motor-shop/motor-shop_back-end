import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1676394807986 implements MigrationInterface {
    name = 'createTables1676394807986'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "adress" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "zip_code" character varying(9) NOT NULL, "state" character varying(50) NOT NULL, "city" character varying(50) NOT NULL, "street" character varying(50) NOT NULL, "house_number" integer NOT NULL, "complement" character varying(50) NOT NULL, CONSTRAINT "PK_f108093ea9cd9f59d72c2f1a057" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "username" character varying(50) NOT NULL, "email" character varying(100) NOT NULL, "cpf" character varying(14) NOT NULL, "cellphone" character varying(50) NOT NULL, "birth_at" TIMESTAMP NOT NULL DEFAULT now(), "description" character varying(250) NOT NULL, "password" character varying(150) NOT NULL, "confirm_password" character varying(150) NOT NULL, "is_seller" boolean NOT NULL DEFAULT false, "adressIdId" uuid, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "UQ_a6235b5ef0939d8deaad755fc87" UNIQUE ("cpf"), CONSTRAINT "REL_f668f9a293d7211b70d7d72a36" UNIQUE ("adressIdId"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_f668f9a293d7211b70d7d72a361" FOREIGN KEY ("adressIdId") REFERENCES "adress"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_f668f9a293d7211b70d7d72a361"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "adress"`);
    }

}
