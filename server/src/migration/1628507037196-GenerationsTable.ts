import {MigrationInterface, QueryRunner} from "typeorm";

export class GenerationsTable1628507037196 implements MigrationInterface {
    name = 'GenerationsTable1628507037196'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "generations"
                (
                    "id" serial not null constraint generations_pk primary key,
                    "name" character varying NOT NULL,
                    "image_url" character varying,
                    "year_from" int NOT NULL,
                    "year_to" int NOT NULL,
                    "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                    "updatedAt" TIMESTAMP NOT NULL DEFAULT now()
             )`
        );

        await queryRunner.query(
            `INSERT INTO "generations" VALUES ('1', 'VII (G2x)','img','2021','2021', now(), now() ) `
        );

        await queryRunner.query(
            `INSERT INTO "generations" VALUES ('2', 'VI (F3x) Рестайлинг','img','2021','2021', now(), now() ) `
        );

        await queryRunner.query(
            `INSERT INTO "generations" VALUES ('3', 'IV (G05)','img','2021','2021', now(), now() ) `
        );

        await queryRunner.query(
            `INSERT INTO "generations" VALUES ('4', 'II', 'img','2021','2021', now(), now() ) `
        );

        await queryRunner.query(
            `INSERT INTO "generations" VALUES ('5', 'III', 'img','2021','2021', now(), now() ) `
        );

        await queryRunner.query(
            `INSERT INTO "generations" VALUES ('6', 'III (G15)','img','2021','2021', now(), now() ) `
        );

        await queryRunner.query(
            `INSERT INTO "generations" VALUES ('7', 'IV (XW50)','img','2015','2021', now(), now() ) `
        );

        await queryRunner.query(
            `INSERT INTO "generations" VALUES ('8', 'XII (E210)','https://avatars.mds.yandex.net/get-verba/1030388/2a00000160935780b135a55662f0aba4e157/minicard','2018','2021', now(), now() ) `
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "generations"`);
    }

}
