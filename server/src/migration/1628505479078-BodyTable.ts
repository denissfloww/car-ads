import {MigrationInterface, QueryRunner} from "typeorm";

export class BodyTable1628505479078 implements MigrationInterface {
    name = 'BodyTable1628505479078'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "bodies"
                (
                    "id" serial not null constraint body_pk primary key,
                    "name" character varying NOT NULL,
                    "image_url" character varying ,
                    "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                    "updatedAt" TIMESTAMP NOT NULL DEFAULT now()
             )`
        );

        await queryRunner.query(
            `INSERT INTO "bodies" VALUES ('1', 'Седан', now(), now() ) `
        );

        await queryRunner.query(
            `INSERT INTO "bodies" VALUES ('2', 'Хэтчбэк', now(), now() ) `
        );

        await queryRunner.query(
            `INSERT INTO "bodies" VALUES ('3', 'Универсал', now(), now() ) `
        );

        await queryRunner.query(
            `INSERT INTO "bodies" VALUES ('4', 'Кроссовер', now(), now() ) `
        );

        await queryRunner.query(
            `INSERT INTO "bodies" VALUES ('5', 'Хэтчбэк 5 дверей', now(), now() ) `
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "bodies"`);
    }

}
