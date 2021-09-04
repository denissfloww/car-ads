import {MigrationInterface, QueryRunner} from "typeorm";

export class ModelsTable1628508243645 implements MigrationInterface {
    name = 'ModelsTable1628508243645'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "models"
                    (
                        "id" integer generated always as identity
                            constraint models_pk primary key,
                        "name" character varying NOT NULL,
                        "brand_id" int
                            constraint models_brands_fk
                                references brands
                                on update cascade on delete cascade,
                        "createdAt" TIMESTAMP NOT NULL DEFAULT now(), 
                        "updatedAt" TIMESTAMP NOT NULL DEFAULT now() 
                    )`
        );
//1
        await queryRunner.query(
            `INSERT INTO "models" (name, brand_id) VALUES
                            (                            
                             'Prius', --название
                             '1' --бренд                 
                            ) `
        );
//2
        await queryRunner.query(
            `INSERT INTO "models" (name, brand_id) VALUES
            (
                'Corolla', --название
                '1' --бренд                 
            ) `
        );
//3
        await queryRunner.query(
            `INSERT INTO "models" (name, brand_id) VALUES
            (
                'Avensis', --название
                '1' --бренд                 
            ) `
        );
//4
        await queryRunner.query(
            `INSERT INTO "models" (name, brand_id) VALUES
            (
                'Prado', --название
                '1' --бренд                 
            ) `
        );
//5
        await queryRunner.query(
            `INSERT INTO "models" (name, brand_id) VALUES
            (
                'X3', --название
                '5' --бренд                 
            ) `
        );
//6
        await queryRunner.query(
            `INSERT INTO "models" (name, brand_id) VALUES
            (
                '1 серия', --название
                '5' --бренд                 
            ) `
        );
//7
        await queryRunner.query(
            `INSERT INTO "models" (name, brand_id) VALUES
            (
                '2 серия', --название
                '5' --бренд                 
            ) `
        );
//8
        await queryRunner.query(
            `INSERT INTO "models" (name, brand_id) VALUES
            (
                '3 серия', --название
                '5' --бренд                 
            ) `
        );
//9
        await queryRunner.query(
            `INSERT INTO "models" (name, brand_id) VALUES
            (
                'Almera', --название
                '2' --бренд                 
            ) `
        );
//10
        await queryRunner.query(
            `INSERT INTO "models" (name, brand_id) VALUES
            (
                'Murano', --название
                '2' --бренд                 
            ) `
        );
//11
        await queryRunner.query(
            `INSERT INTO "models" (name, brand_id) VALUES
            (
                'Explorer', --название
                '3' --бренд                 
            ) `
        );
//12
        await queryRunner.query(
            `INSERT INTO "models" (name, brand_id) VALUES
            (
                'Kuga', --название
                '3' --бренд                 
            ) `
        );
//13
        await queryRunner.query(
            `INSERT INTO "models" (name, brand_id) VALUES
            (
                'Accord', --название
                '4' --бренд                 
            ) `
        );
//14
        await queryRunner.query(
            `INSERT INTO "models" (name, brand_id) VALUES
            (
                'CR-V', --название
                '4' --бренд                 
            ) `
        );
//15
        await queryRunner.query(
            `INSERT INTO "models" (name, brand_id) VALUES
            (
                'Ceed', --название
                '6' --бренд                 
            ) `
        );
//16
        await queryRunner.query(
            `INSERT INTO "models" (name, brand_id) VALUES
            (
                'K5', --название
                '6' --бренд                 
            ) `
        );
//17
        await queryRunner.query(
            `INSERT INTO "models" (name, brand_id) VALUES
            (
                'A4', --название
                '7' --бренд                 
            ) `
        );
//18
        await queryRunner.query(
            `INSERT INTO "models" (name, brand_id) VALUES
            (
                'Q7', --название
                '7' --бренд                 
            ) `
        );
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "models"`);
    }

}
