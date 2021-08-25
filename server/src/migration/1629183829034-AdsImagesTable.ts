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
          `INSERT INTO "ad_image" VALUES (1, 1, '1629443665870ea0552ff-640c-4ab9-951c-d80f9a0dcc09') `
        );

        await queryRunner.query(
          `INSERT INTO "ad_image" VALUES (2, 1, '1629569874379cb3d6c2c-4f18-4532-8bc1-a95d44e42ec5') `
        );

        await queryRunner.query(
          `INSERT INTO "ad_image" VALUES (3, 1, '16295698743746b2ca3b7-7140-45b7-a660-efc604df5f1c') `
        );

        await queryRunner.query(
          `INSERT INTO "ad_image" VALUES (4, 1, '162944366587049db6d26-8dbe-4c25-acfa-f1c5dad5c203') `
        );

        await queryRunner.query(
          `INSERT INTO "ad_image" VALUES (5, 1, '162956987437893dffdec-0080-448c-8ef2-77e21f177162') `
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "ad_image"`);
    }

}
