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
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "ad_image"`);
    }

}
