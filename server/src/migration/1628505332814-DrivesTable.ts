import {MigrationInterface, QueryRunner} from "typeorm";

export class DrivesTable1628505332814 implements MigrationInterface {
    name = 'DrivesTable1628505332814'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "drives"
                (
                    "id" serial not null constraint drives_pk primary key,
                    "name" character varying NOT NULL,
                    "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                    "updatedAt" TIMESTAMP NOT NULL DEFAULT now()
             )`
        );

        await queryRunner.query(
            `INSERT INTO "drives" VALUES ('1', 'Передний', now(), now() ) `
        );

        await queryRunner.query(
            `INSERT INTO "drives" VALUES ('2', 'Задний', now(), now() ) `
        );

        await queryRunner.query(
            `INSERT INTO "drives" VALUES ('3', 'Полный', now(), now() ) `
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "drives"`);
    }

}
