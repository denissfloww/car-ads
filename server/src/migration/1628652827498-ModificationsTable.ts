import {MigrationInterface, QueryRunner} from "typeorm";
import {Wheel} from "../enums/WheelLocationEnum";

export class ModificationsTable1628652827498 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "modifications"
                    (
                        "id" integer generated always as identity
                            constraint modifications_pk primary key,                    
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
                        "wheel" character varying NOT NULL,
                        "createdAt" TIMESTAMP NOT NULL DEFAULT now(), 
                        "updatedAt" TIMESTAMP NOT NULL DEFAULT now() 
                    )`
        );
//Prius
        await queryRunner.query(
            `INSERT INTO "modifications" 
                (model_id, engine_type_id, drive_id, gearbox_id, body_id, generation_id, engine_capacity, hp, wheel)
                        VALUES
                            (                                               
                             '1', --модель
                             '3', --тип двигателя
                             '1', --привод
                             '1', --коробка
                             '5', --кузов
                             '1', --поколение
                             '1.8',--объем
                             '98', --мощность                     
                             '${Wheel.Left}' --руль                  
                            ) `
        );

        await queryRunner.query(
            `INSERT INTO "modifications" 
                (model_id, engine_type_id, drive_id, gearbox_id, body_id, generation_id, engine_capacity, hp, wheel)
                        VALUES
                            (                                               
                             '1', --модель
                             '3', --тип двигателя
                             '1', --привод
                             '1', --коробка
                             '5', --кузов
                             '2', --поколение
                             '1.8',--объем
                             '98', --мощность                            
                             '${Wheel.Left}' --руль                  
                            ) `
        );
//Corolla
        await queryRunner.query(
            `INSERT INTO "modifications" 
                (model_id, engine_type_id, drive_id, gearbox_id, body_id, generation_id, engine_capacity, hp, wheel)
                        VALUES
                            (                                               
                             '2', --модель
                             '3', --тип двигателя
                             '1', --привод
                             '1', --коробка
                             '1', --кузов
                             '3', --поколение
                             '1.6',--объем
                             '122', --мощность                             
                             '${Wheel.Left}' --руль                  
                            ) `
        );

        await queryRunner.query(
            `INSERT INTO "modifications" 
                (model_id, engine_type_id, drive_id, gearbox_id, body_id, generation_id, engine_capacity, hp, wheel)
                        VALUES
                            (                                               
                             '2', --модель
                             '3', --тип двигателя
                             '1', --привод
                             '1', --коробка
                             '1', --кузов
                             '4', --поколение
                             '1.6',--объем
                             '122', --мощность                             
                             '${Wheel.Left}' --руль                  
                            ) `
        );

//Avensis
        await queryRunner.query(
            `INSERT INTO "modifications" 
                (model_id, engine_type_id, drive_id, gearbox_id, body_id, generation_id, engine_capacity, hp, wheel)
                        VALUES
                            (                                               
                             '3', --модель
                             '3', --тип двигателя
                             '1', --привод
                             '1', --коробка
                             '1', --кузов
                             '5', --поколение
                             '1.8',--объем
                             '147', --мощность                             
                             '${Wheel.Left}' --руль                  
                            ) `
        );
        await queryRunner.query(
            `INSERT INTO "modifications" 
                (model_id, engine_type_id, drive_id, gearbox_id, body_id, generation_id, engine_capacity, hp, wheel)
                        VALUES
                            (                                               
                             '3', --модель
                             '1', --тип двигателя
                             '1', --привод
                             '1', --коробка
                             '1', --кузов
                             '6', --поколение
                             '1.8',--объем
                             '147', --мощность                             
                             '${Wheel.Left}' --руль                  
                            ) `
        );

//Prado
        await queryRunner.query(
            `INSERT INTO "modifications" 
                (model_id, engine_type_id, drive_id, gearbox_id, body_id, generation_id, engine_capacity, hp, wheel)
                        VALUES
                            (                                               
                             '4', --модель
                             '1', --тип двигателя
                             '1', --привод
                             '1', --коробка
                             '1', --кузов
                             '7', --поколение
                             '1.8',--объем
                             '147', --мощность                             
                             '${Wheel.Left}' --руль                  
                            ) `
        );
        await queryRunner.query(
            `INSERT INTO "modifications" 
                (model_id, engine_type_id, drive_id, gearbox_id, body_id, generation_id, engine_capacity, hp, wheel)
                        VALUES
                            (                                               
                             '4', --модель
                             '1', --тип двигателя
                             '1', --привод
                             '1', --коробка
                             '1', --кузов
                             '8', --поколение
                             '2.7',--объем
                             '163', --мощность                             
                             '${Wheel.Left}' --руль                  
                            ) `
        );
//bmw x3
        await queryRunner.query(
            `INSERT INTO "modifications" 
                (model_id, engine_type_id, drive_id, gearbox_id, body_id, generation_id, engine_capacity, hp, wheel)
                        VALUES
                            (                                               
                             '5', --модель
                             '1', --тип двигателя
                             '3', --привод
                             '1', --коробка
                             '1', --кузов
                             '9', --поколение
                             '2.0',--объем
                             '190', --мощность                             
                             '${Wheel.Left}' --руль                  
                            ) `
        );
        await queryRunner.query(
            `INSERT INTO "modifications" 
                (model_id, engine_type_id, drive_id, gearbox_id, body_id, generation_id, engine_capacity, hp, wheel)
                        VALUES
                            (                                               
                             '5', --модель
                             '1', --тип двигателя
                             '1', --привод
                             '1', --коробка
                             '1', --кузов
                             '10', --поколение
                             '2.0',--объем
                             '176', --мощность                             
                             '${Wheel.Left}' --руль                  
                            ) `
        );

//1 series bmw
        await queryRunner.query(
            `INSERT INTO "modifications" 
                (model_id, engine_type_id, drive_id, gearbox_id, body_id, generation_id, engine_capacity, hp, wheel)
                        VALUES
                            (                                               
                             '6', --модель
                             '1', --тип двигателя
                             '3', --привод
                             '1', --коробка
                             '5', --кузов
                             '11', --поколение
                             '1.5',--объем
                             '190', --мощность                             
                             '${Wheel.Left}' --руль                  
                            ) `
        );
        await queryRunner.query(
            `INSERT INTO "modifications" 
                (model_id, engine_type_id, drive_id, gearbox_id, body_id, generation_id, engine_capacity, hp, wheel)
                        VALUES
                            (                                               
                             '6', --модель
                             '1', --тип двигателя
                             '1', --привод
                             '1', --коробка
                             '5', --кузов
                             '12', --поколение
                             '1.5',--объем
                             '136', --мощность                             
                             '${Wheel.Left}' --руль                  
                            ) `
        );



//2 series bmw
        await queryRunner.query(
            `INSERT INTO "modifications" 
                (model_id, engine_type_id, drive_id, gearbox_id, body_id, generation_id, engine_capacity, hp, wheel)
                        VALUES
                            (                                               
                             '7', --модель
                             '2', --тип двигателя
                             '3', --привод
                             '1', --коробка
                             '1', --кузов
                             '13', --поколение
                             '2.0',--объем
                             '190', --мощность                             
                             '${Wheel.Left}' --руль                  
                            ) `
        );
        await queryRunner.query(
            `INSERT INTO "modifications" 
                (model_id, engine_type_id, drive_id, gearbox_id, body_id, generation_id, engine_capacity, hp, wheel)
                        VALUES
                            (                                               
                             '7', --модель
                             '1', --тип двигателя
                             '1', --привод
                             '1', --коробка
                             '1', --кузов
                             '14', --поколение
                             '1.5',--объем
                             '140', --мощность                             
                             '${Wheel.Left}' --руль                  
                            ) `
        );

//3 series bmw
        await queryRunner.query(
            `INSERT INTO "modifications" 
                (model_id, engine_type_id, drive_id, gearbox_id, body_id, generation_id, engine_capacity, hp, wheel)
                        VALUES
                            (                                               
                             '8', --модель
                             '2', --тип двигателя
                             '3', --привод
                             '1', --коробка
                             '1', --кузов
                             '15', --поколение
                             '2.0',--объем
                             '190', --мощность                             
                             '${Wheel.Left}' --руль                  
                            ) `
        );
        await queryRunner.query(
            `INSERT INTO "modifications" 
                (model_id, engine_type_id, drive_id, gearbox_id, body_id, generation_id, engine_capacity, hp, wheel)
                        VALUES
                            (                                               
                             '8', --модель
                             '1', --тип двигателя
                             '1', --привод
                             '1', --коробка
                             '1', --кузов
                             '16', --поколение
                             '1.5',--объем
                             '136', --мощность                             
                             '${Wheel.Left}' --руль                  
                            ) `
        );

//almera
        await queryRunner.query(
            `INSERT INTO "modifications" 
                (model_id, engine_type_id, drive_id, gearbox_id, body_id, generation_id, engine_capacity, hp, wheel)
                        VALUES
                            (                                               
                             '9', --модель
                             '2', --тип двигателя
                             '3', --привод
                             '1', --коробка
                             '1', --кузов
                             '17', --поколение
                             '1.6',--объем
                             '106', --мощность                             
                             '${Wheel.Left}' --руль                  
                            ) `
        );
        await queryRunner.query(
            `INSERT INTO "modifications" 
                (model_id, engine_type_id, drive_id, gearbox_id, body_id, generation_id, engine_capacity, hp, wheel)
                        VALUES
                            (                                               
                             '9', --модель
                             '1', --тип двигателя
                             '1', --привод
                             '1', --коробка
                             '1', --кузов
                             '18', --поколение
                             '1.5',--объем
                             '82', --мощность                             
                             '${Wheel.Left}' --руль                  
                            ) `
        );

//murano
        await queryRunner.query(
            `INSERT INTO "modifications" 
                (model_id, engine_type_id, drive_id, gearbox_id, body_id, generation_id, engine_capacity, hp, wheel)
                        VALUES
                            (                                               
                             '10', --модель
                             '2', --тип двигателя
                             '3', --привод
                             '1', --коробка
                             '4', --кузов
                             '19', --поколение
                             '3.5',--объем
                             '249', --мощность                             
                             '${Wheel.Left}' --руль                  
                            ) `
        );
        await queryRunner.query(
            `INSERT INTO "modifications" 
                (model_id, engine_type_id, drive_id, gearbox_id, body_id, generation_id, engine_capacity, hp, wheel)
                        VALUES
                            (                                               
                             '10', --модель
                             '1', --тип двигателя
                             '1', --привод
                             '1', --коробка
                             '4', --кузов
                             '20', --поколение
                             '3.5',--объем
                             '249', --мощность                                
                             '${Wheel.Left}' --руль                  
                            ) `
        );

//explorer
        await queryRunner.query(
            `INSERT INTO "modifications" 
                (model_id, engine_type_id, drive_id, gearbox_id, body_id, generation_id, engine_capacity, hp, wheel)
                        VALUES
                            (                                               
                             '11', --модель
                             '2', --тип двигателя
                             '3', --привод
                             '1', --коробка
                             '4', --кузов
                             '21', --поколение
                             '2.3',--объем
                             '300', --мощность                             
                             '${Wheel.Left}' --руль                  
                            ) `
        );
        await queryRunner.query(
            `INSERT INTO "modifications" 
                (model_id, engine_type_id, drive_id, gearbox_id, body_id, generation_id, engine_capacity, hp, wheel)
                        VALUES
                            (                                               
                             '11', --модель
                             '1', --тип двигателя
                             '1', --привод
                             '1', --коробка
                             '4', --кузов
                             '22', --поколение
                             '3.5',--объем
                             '249', --мощность                                
                             '${Wheel.Left}' --руль                  
                            ) `
        );

//kuga
        await queryRunner.query(
            `INSERT INTO "modifications" 
                (model_id, engine_type_id, drive_id, gearbox_id, body_id, generation_id, engine_capacity, hp, wheel)
                        VALUES
                            (                                               
                             '12', --модель
                             '2', --тип двигателя
                             '3', --привод
                             '1', --коробка
                             '4', --кузов
                             '23', --поколение
                             '1.5',--объем
                             '120', --мощность                             
                             '${Wheel.Left}' --руль                  
                            ) `
        );
        await queryRunner.query(
            `INSERT INTO "modifications" 
                (model_id, engine_type_id, drive_id, gearbox_id, body_id, generation_id, engine_capacity, hp, wheel)
                        VALUES
                            (                                               
                             '12', --модель
                             '1', --тип двигателя
                             '1', --привод
                             '1', --коробка
                             '4', --кузов
                             '24', --поколение
                             '1.5',--объем
                             '150', --мощность                                
                             '${Wheel.Left}' --руль                  
                            ) `
        );
//accord
        await queryRunner.query(
            `INSERT INTO "modifications" 
                (model_id, engine_type_id, drive_id, gearbox_id, body_id, generation_id, engine_capacity, hp, wheel)
                        VALUES
                            (                                               
                             '13', --модель
                             '2', --тип двигателя
                             '3', --привод
                             '1', --коробка
                             '1', --кузов
                             '25', --поколение
                             '1.5',--объем
                             '192', --мощность                             
                             '${Wheel.Left}' --руль                  
                            ) `
        );
        await queryRunner.query(
            `INSERT INTO "modifications" 
                (model_id, engine_type_id, drive_id, gearbox_id, body_id, generation_id, engine_capacity, hp, wheel)
                        VALUES
                            (                                               
                             '13', --модель
                             '1', --тип двигателя
                             '1', --привод
                             '1', --коробка
                             '1', --кузов
                             '26', --поколение
                             '2.4',--объем
                             '188', --мощность                                
                             '${Wheel.Left}' --руль                  
                            ) `
        );
//CR-V
        await queryRunner.query(
            `INSERT INTO "modifications" 
                (model_id, engine_type_id, drive_id, gearbox_id, body_id, generation_id, engine_capacity, hp, wheel)
                        VALUES
                            (                                               
                             '14', --модель
                             '2', --тип двигателя
                             '3', --привод
                             '1', --коробка
                             '4', --кузов
                             '27', --поколение
                             '2.4',--объем
                             '186', --мощность                             
                             '${Wheel.Left}' --руль                  
                            ) `
        );
        await queryRunner.query(
            `INSERT INTO "modifications" 
                (model_id, engine_type_id, drive_id, gearbox_id, body_id, generation_id, engine_capacity, hp, wheel)
                        VALUES
                            (                                               
                             '14', --модель
                             '1', --тип двигателя
                             '1', --привод
                             '1', --коробка
                             '4', --кузов
                             '28', --поколение
                             '2.0',--объем
                             '150', --мощность                                
                             '${Wheel.Left}' --руль                  
                            ) `
        );

//Ceed
        await queryRunner.query(
            `INSERT INTO "modifications" 
                (model_id, engine_type_id, drive_id, gearbox_id, body_id, generation_id, engine_capacity, hp, wheel)
                        VALUES
                            (                                               
                             '15', --модель
                             '2', --тип двигателя
                             '3', --привод
                             '1', --коробка
                             '2', --кузов
                             '29', --поколение
                             '1.4',--объем
                             '100', --мощность                             
                             '${Wheel.Left}' --руль                  
                            ) `
        );
        await queryRunner.query(
            `INSERT INTO "modifications" 
                (model_id, engine_type_id, drive_id, gearbox_id, body_id, generation_id, engine_capacity, hp, wheel)
                        VALUES
                            (                                               
                             '15', --модель
                             '1', --тип двигателя
                             '1', --привод
                             '1', --коробка
                             '2', --кузов
                             '30', --поколение
                             '1.6',--объем
                             '128', --мощность                                
                             '${Wheel.Left}' --руль                  
                            ) `
        );

//k5
        await queryRunner.query(
            `INSERT INTO "modifications" 
                (model_id, engine_type_id, drive_id, gearbox_id, body_id, generation_id, engine_capacity, hp, wheel)
                        VALUES
                            (                                               
                             '16', --модель
                             '2', --тип двигателя
                             '3', --привод
                             '1', --коробка
                             '1', --кузов
                             '31', --поколение
                             '2.0',--объем
                             '150', --мощность                             
                             '${Wheel.Left}' --руль                  
                            ) `
        );


//A4
        await queryRunner.query(
            `INSERT INTO "modifications" 
                (model_id, engine_type_id, drive_id, gearbox_id, body_id, generation_id, engine_capacity, hp, wheel)
                        VALUES
                            (                                               
                             '17', --модель
                             '2', --тип двигателя
                             '3', --привод
                             '1', --коробка
                             '1', --кузов
                             '32', --поколение
                             '1.4',--объем
                             '150', --мощность                             
                             '${Wheel.Left}' --руль                  
                            ) `
        );
        await queryRunner.query(
            `INSERT INTO "modifications" 
                (model_id, engine_type_id, drive_id, gearbox_id, body_id, generation_id, engine_capacity, hp, wheel)
                        VALUES
                            (                                               
                             '17', --модель
                             '1', --тип двигателя
                             '1', --привод
                             '1', --коробка
                             '1', --кузов
                             '33', --поколение
                             '2.0',--объем
                             '150', --мощность                                
                             '${Wheel.Left}' --руль                  
                            ) `
        );

//Q7
        await queryRunner.query(
            `INSERT INTO "modifications" 
                (model_id, engine_type_id, drive_id, gearbox_id, body_id, generation_id, engine_capacity, hp, wheel)
                        VALUES
                            (                                               
                             '18', --модель
                             '1', --тип двигателя
                             '3', --привод
                             '1', --коробка
                             '4', --кузов
                             '34', --поколение
                             '3.0',--объем
                             '249', --мощность                             
                             '${Wheel.Left}' --руль                  
                            ) `
        );
        await queryRunner.query(
            `INSERT INTO "modifications" 
                (model_id, engine_type_id, drive_id, gearbox_id, body_id, generation_id, engine_capacity, hp, wheel)
                        VALUES
                            (                                               
                             '18', --модель
                             '2', --тип двигателя
                             '1', --привод
                             '1', --коробка
                             '4', --кузов
                             '35', --поколение
                             '3.0',--объем
                             '249', --мощность                                
                             '${Wheel.Left}' --руль                  
                            ) `
        );


    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "modifications"`);
    }

}
