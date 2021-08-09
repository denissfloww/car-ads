import {MigrationInterface, QueryRunner} from "typeorm";

export class BrandTable1628502510534 implements MigrationInterface {
    name = 'BrandTable1628502510534'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "brands"
                    (
                    "id" serial not null constraint brand_pk primary key,
                    "name" character varying NOT NULL,
                    "image_url" character varying,
                    "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                    "updatedAt" TIMESTAMP NOT NULL DEFAULT now()
                     )`
        );

        await queryRunner.query(
            `INSERT INTO "brands" VALUES ('1', 'Toyota','https://avatars.mds.yandex.net/get-verba/3587101/2a00000179b4143e937258ee2d1943c201f0/logo', now(), now() ) `
        );

        await queryRunner.query(
            `INSERT INTO "brands" VALUES ('2', 'Nissan','https://avatars.mds.yandex.net/get-verba/3587101/2a00000179b3e3855153a7ad4c6acf51a351/logo', now(), now() ) `
        );

        await queryRunner.query(
            `INSERT INTO "brands" VALUES ('3', 'Ford','https://avatars.mds.yandex.net/get-verba/216201/2a00000179b19823f006efb87fadeffbf25a/logo', now(), now() ) `
        );

        await queryRunner.query(
            `INSERT INTO "brands" VALUES ('4', 'Honda','https://avatars.mds.yandex.net/get-verba/997355/2a00000179b3bd0ba30fdde2a3274e9dd697/logo', now(), now() ) `
        );

        await queryRunner.query(
            `INSERT INTO "brands" VALUES ('5', 'BMW','https://avatars.mds.yandex.net/get-verba/1030388/2a00000179af8e23344d871bcfa394f0c60d/logo', now(), now() ) `
        );

        await queryRunner.query(
            `INSERT INTO "brands" VALUES ('6', 'Kia','https://avatars.mds.yandex.net/get-verba/3587101/2a0000017a6114778ce634401ce1a0fb0a1d/logo', now(), now() ) `
        );

        await queryRunner.query(
            `INSERT INTO "brands" VALUES ('7', 'Audi','https://avatars.mds.yandex.net/get-verba/3587101/2a00000179af710f40b85f9c3aedb68201fd/logo', now(), now() ) `
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "brands"`)
    }

}
