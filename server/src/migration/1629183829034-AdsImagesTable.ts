import {MigrationInterface, QueryRunner} from "typeorm";

export class AdsImagesTable1629183829034 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
          `CREATE TABLE "ad_image"
            (
                "id" integer generated always as identity
                    constraint ad_image_pk
                        primary key,
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
          `INSERT INTO "ad_image" (ad_id, image_name) VALUES (1, 'https://storage.yandexcloud.net/car-ads/images/test1.jpg') `
        );

        await queryRunner.query(
          `INSERT INTO "ad_image" (ad_id, image_name) VALUES ( 1, 'https://storage.yandexcloud.net/car-ads/images/test2.jpg') `
        );

        await queryRunner.query(
          `INSERT INTO "ad_image" (ad_id, image_name) VALUES ( 1, 'https://storage.yandexcloud.net/car-ads/images/test3.jpg') `
        );

        await queryRunner.query(
          `INSERT INTO "ad_image" (ad_id, image_name) VALUES ( 1, 'https://storage.yandexcloud.net/car-ads/images/test4.jpg') `
        );

        await queryRunner.query(
          `INSERT INTO "ad_image" (ad_id, image_name) VALUES ( 1, 'https://storage.yandexcloud.net/car-ads/images/test5.jpg') `
        );

        await queryRunner.query(
            `INSERT INTO "ad_image" (ad_id, image_name) VALUES ( 1, 'https://storage.yandexcloud.net/car-ads/images/test6.jpg') `
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "ad_image"`);
    }

}
