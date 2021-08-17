import {MigrationInterface, QueryRunner} from "typeorm";

export class AdsTable1629182753210 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
          `CREATE TABLE "ads"
            (
                "id" serial not null constraint ads_pk primary key,
                "user_id" uuid
                    constraint users_ads_fk
                        references users
                        on update cascade on delete cascade,
                "modification_id" int
                    constraint ads_modifications_fk
                        references modifications
                        on update cascade on delete cascade,
                "vin" character varying NOT NULL,        
                "mileage" int,
                "color" character varying NOT NULL,
                "description" character varying NOT NULL,
                "phone" bigint,
                "owners_count" character varying NOT NULL,
                "price" bigint,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now()
            )`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`DROP TABLE "ads"`);
    }

}
