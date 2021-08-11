import {MigrationInterface, QueryRunner} from "typeorm";

export class ModelsTable1628508243645 implements MigrationInterface {
    name = 'ModelsTable1628508243645'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "models"
                    (
                        "id" serial not null constraint models_pk primary key,
                        "name" character varying NOT NULL,
                        "brand_id" int
                            constraint models_brands_fk
                                references brands
                                on update cascade on delete cascade,
                        "createdAt" TIMESTAMP NOT NULL DEFAULT now(), 
                        "updatedAt" TIMESTAMP NOT NULL DEFAULT now() 
                    )`
        );

        await queryRunner.query(
            `INSERT INTO "models" VALUES
                            (
                             '1', --ид
                             'Prius', --название
                             '1', --бренд                   
                             now(),
                             now()
                            ) `
        );

        await queryRunner.query(
            `INSERT INTO "models" VALUES
            (
                '2', --ид
                'Corolla', --название
                '1', --бренд
                now(),
                now()
            ) `
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "models"`);
    }

}
