import {MigrationInterface, QueryRunner} from "typeorm";

export class GearBoxesTable1628504878002 implements MigrationInterface {
    name = 'GearBoxesTable1628504878002'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "gearboxes"
                (
                    "id" serial not null constraint gearboxes_pk primary key,
                    "name" character varying NOT NULL,
                    "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                    "updatedAt" TIMESTAMP NOT NULL DEFAULT now()
             )`
        );

        await queryRunner.query(
            `INSERT INTO "gearboxes" VALUES ('1', 'Автоматическая', now(), now() ) `
        );

        await queryRunner.query(
            `INSERT INTO "gearboxes" VALUES ('2', 'Механическая', now(), now() ) `
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "gearboxes"`);
    }

}
