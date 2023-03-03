import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1677850713379 implements MigrationInterface {
    name = 'createTables1677850713379'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_f668f9a293d7211b70d7d72a361"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "REL_f668f9a293d7211b70d7d72a36"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "adressIdId"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "adressId" uuid`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_5731a570bc86d6ad75f85ddc772" UNIQUE ("adressId")`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username")`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_5731a570bc86d6ad75f85ddc772" FOREIGN KEY ("adressId") REFERENCES "adress"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_5731a570bc86d6ad75f85ddc772"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_5731a570bc86d6ad75f85ddc772"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "adressId"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "adressIdId" uuid`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "REL_f668f9a293d7211b70d7d72a36" UNIQUE ("adressIdId")`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_f668f9a293d7211b70d7d72a361" FOREIGN KEY ("adressIdId") REFERENCES "adress"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
