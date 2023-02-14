import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1676396856013 implements MigrationInterface {
    name = 'createTables1676396856013'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "adress" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "zip_code" character varying(9) NOT NULL, "state" character varying(50) NOT NULL, "city" character varying(50) NOT NULL, "street" character varying(50) NOT NULL, "house_number" integer NOT NULL, "complement" character varying(50) NOT NULL, CONSTRAINT "PK_f108093ea9cd9f59d72c2f1a057" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "image" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "url" character varying NOT NULL, "advertId" uuid, CONSTRAINT "PK_d6db1ab4ee9ad9dbe86c64e4cc3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "username" character varying(50) NOT NULL, "email" character varying(100) NOT NULL, "cpf" character varying(14) NOT NULL, "cellphone" character varying(50) NOT NULL, "birth_at" TIMESTAMP NOT NULL DEFAULT now(), "description" character varying(250) NOT NULL, "password" character varying(150) NOT NULL, "confirm_password" character varying(150) NOT NULL, "is_seller" boolean NOT NULL DEFAULT false, "adressIdId" uuid, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "UQ_a6235b5ef0939d8deaad755fc87" UNIQUE ("cpf"), CONSTRAINT "REL_f668f9a293d7211b70d7d72a36" UNIQUE ("adressIdId"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "advert" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "isSell" boolean NOT NULL DEFAULT true, "title" character varying(50) NOT NULL, "year" character varying(4) NOT NULL, "km" integer NOT NULL, "price" numeric(12,2) NOT NULL, "description" character varying(200) NOT NULL, "is_car" boolean NOT NULL, "cover_image" character varying NOT NULL, "is_active" boolean NOT NULL DEFAULT true, "user_id" character varying NOT NULL, "userId" uuid, CONSTRAINT "PK_4bd8b4cdfb562b02706beece450" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "comment" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "comment" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL, "advertId" uuid, CONSTRAINT "PK_0b0e4bbc8415ec426f87f3a88e2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "image" ADD CONSTRAINT "FK_9592e1716511608b5ae5a47c61e" FOREIGN KEY ("advertId") REFERENCES "advert"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_f668f9a293d7211b70d7d72a361" FOREIGN KEY ("adressIdId") REFERENCES "adress"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "advert" ADD CONSTRAINT "FK_2a3714047a0c902fd9d5077fdcb" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_85793bc147da570a25caeb32d6d" FOREIGN KEY ("advertId") REFERENCES "advert"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_85793bc147da570a25caeb32d6d"`);
        await queryRunner.query(`ALTER TABLE "advert" DROP CONSTRAINT "FK_2a3714047a0c902fd9d5077fdcb"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_f668f9a293d7211b70d7d72a361"`);
        await queryRunner.query(`ALTER TABLE "image" DROP CONSTRAINT "FK_9592e1716511608b5ae5a47c61e"`);
        await queryRunner.query(`DROP TABLE "comment"`);
        await queryRunner.query(`DROP TABLE "advert"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "image"`);
        await queryRunner.query(`DROP TABLE "adress"`);
    }

}
