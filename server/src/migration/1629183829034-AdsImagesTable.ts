import {MigrationInterface, QueryRunner} from "typeorm";

export class AdsImagesTable1629183829034 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
          `CREATE TABLE "ad_image"
            (
                "id" serial not null constraint ad_image_pk primary key,
                "ad_id" int
                    constraint ad_image_ads_fk
                        references ads
                        on update cascade on delete cascade,
                "image_name" character varying,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now()
           )`
        );


        await queryRunner.query(
          `INSERT INTO "ad_image" VALUES (1, 1, 'https://car-ads.storage.yandexcloud.net/images/2d722d0745ed2fc5f52eb7fddb191e21.jpg') `
        );

        await queryRunner.query(
          `INSERT INTO "ad_image" VALUES (2, 1, 'https://car-ads.storage.yandexcloud.net/images/7f06f0b38d95039ee55328ffaf64c81f.jpg') `
        );

        await queryRunner.query(
          `INSERT INTO "ad_image" VALUES (3, 1, 'https://car-ads.storage.yandexcloud.net/images/42dc4ed29d8de9ab87e8c7d3409acaad.jpg') `
        );

        await queryRunner.query(
          `INSERT INTO "ad_image" VALUES (4, 1, 'https://car-ads.storage.yandexcloud.net/images/857d92d5a22f9fc8a18ffa43b934a4b0.jpg') `
        );

        await queryRunner.query(
          `INSERT INTO "ad_image" VALUES (5, 1, 'https://car-ads.storage.yandexcloud.net/images/031109409a0d6a471d9be250575f6df9.jpg') `
        );

        await queryRunner.query(
            `INSERT INTO "ad_image" VALUES (6, 1, 'https://car-ads.storage.yandexcloud.net/images/f404baa70866bc57bbf8aebb11a1dc00.jpg') `
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "ad_image"`);
    }

}
