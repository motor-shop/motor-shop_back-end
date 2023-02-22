import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1677078048310 implements MigrationInterface {
    name = 'createTables1677078048310'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "advert" DROP COLUMN "user_id"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "advert" ADD "user_id" character varying NOT NULL`);
    }

}
