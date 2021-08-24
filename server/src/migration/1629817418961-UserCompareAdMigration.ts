import {MigrationInterface, QueryRunner} from "typeorm";

export class UserCompareAdMigration1629817418961 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "user_compare_ad"
            (
                "id" serial not null constraint user_compare_ad_pk primary key,
                "ad_id" int
                    constraint user_compare_ad_ads_fk
                        references ads
                        on update cascade on delete cascade,
                "user_id" uuid
                    constraint user_compare_ad_users_fk
                        references users
                        on update cascade on delete cascade,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now()
           )`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user_compare_ad"`);
    }

}
