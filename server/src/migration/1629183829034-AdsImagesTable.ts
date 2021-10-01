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

        await queryRunner.query(
            `INSERT INTO "ad_image" (ad_id, image_name) VALUES ( 3, 'https://storage.yandexcloud.net/car-ads/images/bmw1.jpg') `
        );

        await queryRunner.query(
            `INSERT INTO "ad_image" (ad_id, image_name) VALUES ( 3, 'https://storage.yandexcloud.net/car-ads/images/bmw2.jpg') `
        );

        await queryRunner.query(
            `INSERT INTO "ad_image" (ad_id, image_name) VALUES ( 3, 'https://storage.yandexcloud.net/car-ads/images/bmw3.jpg') `
        );

        await queryRunner.query(
            `INSERT INTO "ad_image" (ad_id, image_name) VALUES ( 3, 'https://storage.yandexcloud.net/car-ads/images/bmw4.jpg') `
        );

        await queryRunner.query(
            `INSERT INTO "ad_image" (ad_id, image_name) VALUES ( 4, 'https://storage.yandexcloud.net/car-ads/images/bmw1.1.jpg') `
        );
        await queryRunner.query(
            `INSERT INTO "ad_image" (ad_id, image_name) VALUES ( 4, 'https://storage.yandexcloud.net/car-ads/images/bmw1.2.jpg') `
        );
        await queryRunner.query(
            `INSERT INTO "ad_image" (ad_id, image_name) VALUES ( 4, 'https://storage.yandexcloud.net/car-ads/images/bmw1.3.jpg') `
        );
        await queryRunner.query(
            `INSERT INTO "ad_image" (ad_id, image_name) VALUES ( 5, 'https://storage.yandexcloud.net/car-ads/images/explorer1.jpg') `
        );
        await queryRunner.query(
            `INSERT INTO "ad_image" (ad_id, image_name) VALUES ( 5, 'https://storage.yandexcloud.net/car-ads/images/explorer2.jpg') `
        );
        await queryRunner.query(
            `INSERT INTO "ad_image" (ad_id, image_name) VALUES ( 5, 'https://storage.yandexcloud.net/car-ads/images/explorer3.jpg') `
        );
        await queryRunner.query(
            `INSERT INTO "ad_image" (ad_id, image_name) VALUES ( 5, 'https://storage.yandexcloud.net/car-ads/images/explorer4.jpg') `
        );
        await queryRunner.query(
            `INSERT INTO "ad_image" (ad_id, image_name) VALUES ( 5, 'https://storage.yandexcloud.net/car-ads/images/explorer5.jpg') `
        );
        await queryRunner.query(
            `INSERT INTO "ad_image" (ad_id, image_name) VALUES ( 5, 'https://storage.yandexcloud.net/car-ads/images/explorer6.jpg') `
        );
        await queryRunner.query(
            `INSERT INTO "ad_image" (ad_id, image_name) VALUES ( 6, 'https://storage.yandexcloud.net/car-ads/images/accord1.jpg') `
        );
        await queryRunner.query(
            `INSERT INTO "ad_image" (ad_id, image_name) VALUES ( 6, 'https://storage.yandexcloud.net/car-ads/images/accord2.jpg') `
        );
        await queryRunner.query(
            `INSERT INTO "ad_image" (ad_id, image_name) VALUES ( 6, 'https://storage.yandexcloud.net/car-ads/images/accord3.jpg') `
        );
        await queryRunner.query(
            `INSERT INTO "ad_image" (ad_id, image_name) VALUES ( 6, 'https://storage.yandexcloud.net/car-ads/images/accord4.jpg') `
        );
        await queryRunner.query(
            `INSERT INTO "ad_image" (ad_id, image_name) VALUES ( 6, 'https://storage.yandexcloud.net/car-ads/images/accord5.jpg') `
        );
        await queryRunner.query(
            `INSERT INTO "ad_image" (ad_id, image_name) VALUES ( 7, 'https://storage.yandexcloud.net/car-ads/images/crv1.jpg') `
        );
        await queryRunner.query(
            `INSERT INTO "ad_image" (ad_id, image_name) VALUES ( 7, 'https://storage.yandexcloud.net/car-ads/images/crv2.jpg') `
        );
        await queryRunner.query(
            `INSERT INTO "ad_image" (ad_id, image_name) VALUES ( 7, 'https://storage.yandexcloud.net/car-ads/images/crv3.jpg') `
        );
        await queryRunner.query(
            `INSERT INTO "ad_image" (ad_id, image_name) VALUES ( 8, 'https://storage.yandexcloud.net/car-ads/images/ceed1.jpg') `
        );
        await queryRunner.query(
            `INSERT INTO "ad_image" (ad_id, image_name) VALUES ( 8, 'https://storage.yandexcloud.net/car-ads/images/ceed2.jpg') `
        );
        await queryRunner.query(
            `INSERT INTO "ad_image" (ad_id, image_name) VALUES ( 8, 'https://storage.yandexcloud.net/car-ads/images/ceed3.jpg') `
        );
        await queryRunner.query(
            `INSERT INTO "ad_image" (ad_id, image_name) VALUES ( 8, 'https://storage.yandexcloud.net/car-ads/images/ceed4.jpg') `
        );
        await queryRunner.query(
            `INSERT INTO "ad_image" (ad_id, image_name) VALUES ( 8, 'https://storage.yandexcloud.net/car-ads/images/ceed5.jpg') `
        );
        await queryRunner.query(
            `INSERT INTO "ad_image" (ad_id, image_name) VALUES ( 9, 'https://storage.yandexcloud.net/car-ads/images/a41.jpg') `
        );
        await queryRunner.query(
            `INSERT INTO "ad_image" (ad_id, image_name) VALUES ( 9, 'https://storage.yandexcloud.net/car-ads/images/a42.jpg') `
        );
        await queryRunner.query(
            `INSERT INTO "ad_image" (ad_id, image_name) VALUES ( 9, 'https://storage.yandexcloud.net/car-ads/images/a43.jpg') `
        );
        await queryRunner.query(
            `INSERT INTO "ad_image" (ad_id, image_name) VALUES ( 9, 'https://storage.yandexcloud.net/car-ads/images/a44.jpg') `
        );
        await queryRunner.query(
            `INSERT INTO "ad_image" (ad_id, image_name) VALUES ( 9, 'https://storage.yandexcloud.net/car-ads/images/a45.jpg') `
        );
        await queryRunner.query(
            `INSERT INTO "ad_image" (ad_id, image_name) VALUES ( 10, 'https://storage.yandexcloud.net/car-ads/images/q71.jpg') `
        );
        await queryRunner.query(
            `INSERT INTO "ad_image" (ad_id, image_name) VALUES ( 10, 'https://storage.yandexcloud.net/car-ads/images/q72.jpg') `
        );
        await queryRunner.query(
            `INSERT INTO "ad_image" (ad_id, image_name) VALUES ( 10, 'https://storage.yandexcloud.net/car-ads/images/q73.jpg') `
        );
        await queryRunner.query(
            `INSERT INTO "ad_image" (ad_id, image_name) VALUES ( 10, 'https://storage.yandexcloud.net/car-ads/images/q74.jpg') `
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "ad_image"`);
    }

}
