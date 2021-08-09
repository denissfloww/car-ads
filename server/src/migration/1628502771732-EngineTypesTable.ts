import {MigrationInterface, QueryRunner} from "typeorm";

export class EngineTypes1628502771732 implements MigrationInterface {
    name = 'EngineTypes1628502771732'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "engine_types"
                (
                    "id" serial not null constraint engine_pk primary key,
                    "name" character varying NOT NULL,
                    "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                    "updatedAt" TIMESTAMP NOT NULL DEFAULT now()
             )`
        );

        await queryRunner.query(
            `INSERT INTO "engine_types" VALUES ('1', 'Бензин', now(), now() ) `
        );

        await queryRunner.query(
            `INSERT INTO "engine_types" VALUES ('2', 'Дизель', now(), now() ) `
        );

        await queryRunner.query(
            `INSERT INTO "engine_types" VALUES ('3', 'Гибрид', now(), now() ) `
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "engine_types"`)
    }

}
