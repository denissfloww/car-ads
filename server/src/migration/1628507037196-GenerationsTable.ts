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
                    "year_to" int DEFAULT date_part('year', now()),
                    "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                    "updatedAt" TIMESTAMP NOT NULL DEFAULT now()
             )`
        );
//Prius
//1
        await queryRunner.query(
            `INSERT INTO "generations" (name, image_url, year_from)
                    VALUES ('XII (E210)','https://avatars.mds.yandex.net/get-verba/1030388/2a00000160935780b135a55662f0aba4e157/minicard','2014') `
        );
//2
        await queryRunner.query(
            `INSERT INTO "generations" (name, image_url, year_from)
                    VALUES ('IV Рестайлинг (XW50)','https://avatars.mds.yandex.net/get-verba/937147/2a0000017bac31e4767c20c4f4633bcf7237/minicard','2018') `
        );
//Corolla
//3
        await queryRunner.query(
            `INSERT INTO "generations" (name, image_url, year_from, year_to)
                    VALUES ('XII (E210)','https://avatars.mds.yandex.net/get-verba/937147/2a00000168d1916a3873906b8fa5855b7bd0/minicard','2018', '2021') `
        );
//4
        await queryRunner.query(
            `INSERT INTO "generations" (name, image_url, year_from, year_to)
                    VALUES ('XI (E160, E170)','https://avatars.mds.yandex.net/get-verba/937147/2a00000168d1916a3873906b8fa5855b7bd0/minicard','2012','2021') `
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
//7
        await queryRunner.query(
            `INSERT INTO "generations" (name, image_url, year_from, year_to)
                    VALUES ('150 Series Рестайлинг 3','https://avatars.mds.yandex.net/get-verba/3587101/2a00000178875ee704791437db034a6502a8/minicard','2018','2021') `
        );
//8
        await queryRunner.query(
            `INSERT INTO "generations" (name, image_url, year_from, year_to)
                    VALUES ('150 Series Рестайлинг 2','https://avatars.mds.yandex.net/get-verba/787013/2a00000160980e22c4284d115dc613b09c67/minicard','2017','2020') `
        );

//X3 BMW
//9
        await queryRunner.query(
            `INSERT INTO "generations" (name, image_url, year_from, year_to)
                    VALUES ('III (G01) Рестайлинг','https://avatars.mds.yandex.net/get-verba/3587101/2a0000017a4755c6b4f7941a2ace6470c200/minicard','2019','2021') `
        );
//10
        await queryRunner.query(
            `INSERT INTO "generations" (name, image_url, year_from, year_to)
                    VALUES ('III (G01)','https://avatars.mds.yandex.net/get-verba/787013/2a0000016093941833e5cd8eea7b45123aa9/minicard','2017','2021') `
        );

//1 серия
//11
        await queryRunner.query(
            `INSERT INTO "generations" (name, image_url, year_from, year_to)
                    VALUES ('III (F40)','https://avatars.mds.yandex.net/get-verba/1540742/2a0000016b07e14411d8f055b5f3d28dfa79/minicard','2019','2021') `
        );
//12
        await queryRunner.query(
            `INSERT INTO "generations" (name, image_url, year_from, year_to)
                    VALUES ('(F20/F21) Рестайлинг 2','https://avatars.mds.yandex.net/get-verba/787013/2a00000160980dfaeeaebcff61501a98f858/minicard','2019','2021') `
        );

//2 серия
//13
        await queryRunner.query(
            `INSERT INTO "generations" (name, image_url, year_from)
                    VALUES ('G42','https://avatars.mds.yandex.net/get-verba/216201/2a0000017a99d74f55f23f3303e0223caee4/minicard','2021') `
        );
//14
        await queryRunner.query(
            `INSERT INTO "generations" (name, image_url, year_from)
                    VALUES ('F44','https://avatars.mds.yandex.net/get-verba/1540742/2a0000016dd922a37f51a7e5b0458726b28d/minicard','2019') `
        );
//3 серия
//15
        await queryRunner.query(
            `INSERT INTO "generations" (name, image_url, year_from)
                    VALUES ('VII (G2x)','https://avatars.mds.yandex.net/get-verba/997355/2a000001663941f1a614747bd8a5b77b64d2/minicard','2018') `
        );
//16
        await queryRunner.query(
            `INSERT INTO "generations" (name, image_url, year_from, year_to)
                    VALUES ('VI (F3x) Рестайлинг','https://avatars.mds.yandex.net/get-verba/1030388/2a000001609484b91b910055688434e6c2be/minicard','2015', '2020') `
        );
//almera nissan
//17
        await queryRunner.query(
            `INSERT INTO "generations" (name, image_url, year_from, year_to)
                    VALUES ('III (G15)','https://avatars.mds.yandex.net/get-verba/216201/2a0000016098487a9e1ff58d5ae35f3de345/minicard','2012', '2018') `
        );
//18
        await queryRunner.query(
            `INSERT INTO "generations" (name, image_url, year_from, year_to)
                    VALUES ('II (N16)','https://avatars.mds.yandex.net/get-verba/787013/2a000001609d6c09eb305345ee1ea7e7bd15/minicard','2002', '2006') `
        );

//Murano
//19
        await queryRunner.query(
            `INSERT INTO "generations" (name, image_url, year_from)
                    VALUES ('III (Z52)','https://avatars.mds.yandex.net/get-verba/1030388/2a00000160940b6da738fb72996892438548/minicard','2014') `
        );
//20
        await queryRunner.query(
            `INSERT INTO "generations" (name, image_url, year_from, year_to)
                    VALUES ('II (Z51)','https://avatars.mds.yandex.net/get-verba/787013/2a000001609d71529aaa3d34e7818d658d85/minicard','2011', '2015') `
        );

//Explorer
//21
        await queryRunner.query(
            `INSERT INTO "generations" (name, image_url, year_from)
                    VALUES ('VI','https://avatars.mds.yandex.net/get-verba/1030388/2a00000162b39b84afa93ce5be37ac6747ae/minicard','2019') `
        );
//22
        await queryRunner.query(
            `INSERT INTO "generations" (name, image_url, year_from, year_to)
                    VALUES ('V','https://avatars.mds.yandex.net/get-verba/787013/2a000001609d71529aaa3d34e7818d658d85/minicard','2017', '2019') `
        );

//Kuga
//23
        await queryRunner.query(
            `INSERT INTO "generations" (name, image_url, year_from)
                    VALUES ('III','https://avatars.mds.yandex.net/get-verba/1030388/2a0000016fd2cceed4aed4ed7fec9d60f6c2/minicard','2019') `
        );
//24
        await queryRunner.query(
            `INSERT INTO "generations" (name, image_url, year_from, year_to)
                    VALUES ('II','https://avatars.mds.yandex.net/get-verba/216201/2a00000160980deaef0f2314c5460de744b4/minicard','2016', '2019') `
        );

//Accord
//25
        await queryRunner.query(
            `INSERT INTO "generations" (name, image_url, year_from)
                    VALUES ('X','https://avatars.mds.yandex.net/get-verba/1030388/2a00000160953d3db47df866ce391d952278/minicard','2017') `
        );
//26
        await queryRunner.query(
            `INSERT INTO "generations" (name, image_url, year_from, year_to)
                    VALUES ('IX Рестайлинг','https://avatars.mds.yandex.net/get-verba/937147/2a0000016e7e699928ab428940357a73855d/minicard','2015', '2019') `
        );

//CR-V
//27
        await queryRunner.query(
            `INSERT INTO "generations" (name, image_url, year_from)
                    VALUES ('V Рестайлинг','https://avatars.mds.yandex.net/get-verba/997355/2a00000174c0bb497c2312c5fe8dd7e70c42/minicard','2019') `
        );
//28
        await queryRunner.query(
            `INSERT INTO "generations" (name, image_url, year_from, year_to)
                    VALUES ('V','https://avatars.mds.yandex.net/get-verba/787013/2a00000160940cc50a4da8503d87d1c2bc51/minicard','2016', '2020') `
        );

//Ceed
//29
        await queryRunner.query(
            `INSERT INTO "generations" (name, image_url, year_from, year_to)
                    VALUES ('II Рестайлинг','https://avatars.mds.yandex.net/get-verba/216201/2a0000016093cfe8b00233301862f484395f/minicard','2015', '2019') `
        );
//30
        await queryRunner.query(
            `INSERT INTO "generations" (name, image_url, year_from)
                    VALUES ('III','https://avatars.mds.yandex.net/get-verba/937147/2a000001651dfdf0cfe51e95317e62c78e9a/minicard','2018') `
        );
//k5
//31
        await queryRunner.query(
            `INSERT INTO "generations" (name, image_url, year_from)
                    VALUES ('III','https://avatars.mds.yandex.net/get-verba/1030388/2a000001786ed43a1847656259d8beb768fd/minicard','2020') `
        );

//A4
//32
        await queryRunner.query(
            `INSERT INTO "generations" (name, image_url, year_from, year_to)
                    VALUES ('V (B9)','https://avatars.mds.yandex.net/get-verba/787013/2a0000016090358a3513690850fcf485d70a/minicard','2015', '2020') `
        );
//33
        await queryRunner.query(
            `INSERT INTO "generations" (name, image_url, year_from)
                    VALUES ('V (B9) Рестайлинг','https://avatars.mds.yandex.net/get-verba/787013/2a0000016b7e65c13c5acad18b2101595da2/minicard','2019') `
        );

//q7
//34
        await queryRunner.query(
            `INSERT INTO "generations" (name, image_url, year_from, year_to)
                    VALUES ('II (4M)','https://avatars.mds.yandex.net/get-verba/1030388/2a000001609d64ce7aaeacf4cb37a5ce5cab/minicard','2015', '2019') `
        );
//35
        await queryRunner.query(
            `INSERT INTO "generations" (name, image_url, year_from)
                    VALUES ('II (4M) Рестайлинг','https://avatars.mds.yandex.net/get-verba/1030388/2a0000016c94a79febd5c3361dbe4b44e384/minicard','2019') `
        );

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "generations"`);
    }

}
