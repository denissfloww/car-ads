import {MigrationInterface, QueryRunner} from "typeorm";

export class ModificationsTable1628652827498 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "modifications"
                    (
                        "id" serial not null constraint modifications_pk primary key,                    
                        "model_id" int
                            constraint modifications_models_fk
                                references models
                                on update cascade on delete cascade,
                                
                        "engine_type_id" int 
                            constraint modifications_engine_types_fk
                                references engine_types
                                on update cascade on delete cascade,
                                
                        "drive_id" int 
                            constraint modifications_drives_fk
                                references drives
                                on update cascade on delete cascade,
                                
                        "gearbox_id" int
                            constraint modifications_gearboxes_fk
                                references gearboxes
                                on update cascade on delete cascade,
                                
                        "body_id" int
                            constraint modifications_bodies_fk
                                references bodies
                                    on update cascade on delete cascade,
                        "generation_id" int
                            constraint modifications_generations_fk
                                references generations
                                    on update cascade on delete cascade,
                        "engine_capacity" float NOT NULL,
                        "hp" int NOT NULL,
                        "year_release" int,
                        "wheel" character varying NOT NULL,
                        "createdAt" TIMESTAMP NOT NULL DEFAULT now(), 
                        "updatedAt" TIMESTAMP NOT NULL DEFAULT now() 
                    )`
        );

        await queryRunner.query(
            `INSERT INTO "modifications" VALUES
                            (
                             '1', --ид                            
                             '1', --модель
                             '3', --тип двигателя
                             '1', --привод
                             '1', --коробка
                             '5', --кузов
                             '7', --поколение
                             '1.8',--объем
                             '98', --мощность
                             '2019',--год выпуска
                             'Левый', --руль
                             now(),
                             now()
                            ) `
        );

        await queryRunner.query(
            `INSERT INTO "modifications" VALUES
            (
                '2', --ид
                '1', --модель
                '1', --тип двигателя
                '3', --привод
                '2', --коробка
                '1', --кузов
                '8', --поколение
                '1.6',--объем
                '122', --мощность
                '2020',--год выпуска
                'Левый', --руль
                now(),
                now()
            ) `
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "modifications"`);
    }

}
