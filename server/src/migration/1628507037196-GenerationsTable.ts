import {MigrationInterface, QueryRunner} from "typeorm";

export class GenerationsTable1628507037196 implements MigrationInterface {
    name = 'GenerationsTable1628507037196'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "generations"
                (
                    "id" integer generated always as identity
                        constraint generations_pk primary key,
                    "name" character varying NOT NULL,
                    "image_url" character varying,
                    "year_from" int NOT NULL,
                    "year_to" int,
                    "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                    "updatedAt" TIMESTAMP NOT NULL DEFAULT now()
             )`
        );
//Prius
//1
        await queryRunner.query(
            `INSERT INTO "generations" (name, image_url, year_from, year_to)
                    VALUES ('XII (E210)','https://avatars.mds.yandex.net/get-verba/1030388/2a00000160935780b135a55662f0aba4e157/minicard','2014','2018') `
        );
//2
        await queryRunner.query(
            `INSERT INTO "generations" (name, image_url, year_from, year_to)
                    VALUES ('IV Рестайлинг (XW50)','https://avatars.mds.yandex.net/get-verba/937147/2a0000017bac31e4767c20c4f4633bcf7237/minicard','2018','2021') `
        );
//Corolla
//3
        await queryRunner.query(
            `INSERT INTO "generations" (name, image_url, year_from, year_to)
                    VALUES ('XII (E210)','https://avatars.mds.yandex.net/get-verba/937147/2a00000168d1916a3873906b8fa5855b7bd0/minicard','2018','2021') `
        );
//4
        await queryRunner.query(
            `INSERT INTO "generations" (name, image_url, year_from, year_to)
                    VALUES ('XI (E160, E170)','https://avatars.mds.yandex.net/get-verba/937147/2a00000168d1916a3873906b8fa5855b7bd0/minicard','2012','2016') `
        );
//Avensis
//5
        await queryRunner.query(
            `INSERT INTO "generations" (name, image_url, year_from, year_to)
                    VALUES ('III Рестайлинг','https://avatars.mds.yandex.net/get-verba/216201/2a000001608db8ee1d40690f05b9b9a8c92a/minicard','2015','2018') `
        );
//6
        await queryRunner.query(
            `INSERT INTO "generations" (name, image_url, year_from, year_to)
                    VALUES ('III','https://avatars.mds.yandex.net/get-verba/787013/2a000001609d14c6f6251c6bab2fc517620d/minicard','2011','2015') `
        );

//Prado
//5
        await queryRunner.query(
            `INSERT INTO "generations" (name, image_url, year_from, year_to)
                    VALUES ('150 Series Рестайлинг 3','https://avatars.mds.yandex.net/get-verba/3587101/2a00000178875ee704791437db034a6502a8/minicard','2018','2021') `
        );
//6
        await queryRunner.query(
            `INSERT INTO "generations" (name, image_url, year_from, year_to)
                    VALUES ('150 Series Рестайлинг 2','https://avatars.mds.yandex.net/get-verba/787013/2a00000160980e22c4284d115dc613b09c67/minicard','2017','2020') `
        );

//X3 BMW
//7
        await queryRunner.query(
            `INSERT INTO "generations" (name, image_url, year_from, year_to)
                    VALUES ('III (G01) Рестайлинг','https://avatars.mds.yandex.net/get-verba/3587101/2a0000017a4755c6b4f7941a2ace6470c200/minicard','2019','2021') `
        );
//8
        await queryRunner.query(
            `INSERT INTO "generations" (name, image_url, year_from, year_to)
                    VALUES ('III (G01)','https://avatars.mds.yandex.net/get-verba/787013/2a0000016093941833e5cd8eea7b45123aa9/minicard','2017','2021') `
        );

//1 серия
//7
        await queryRunner.query(
            `INSERT INTO "generations" (name, image_url, year_from, year_to)
                    VALUES ('III (F40)','https://avatars.mds.yandex.net/get-verba/1540742/2a0000016b07e14411d8f055b5f3d28dfa79/minicard','2019','2021') `
        );
//8
        await queryRunner.query(
            `INSERT INTO "generations" (name, image_url, year_from, year_to)
                    VALUES ('(F20/F21) Рестайлинг 2','https://avatars.mds.yandex.net/get-verba/787013/2a00000160980dfaeeaebcff61501a98f858/minicard','2019','2021') `
        );

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "generations"`);
    }

}
