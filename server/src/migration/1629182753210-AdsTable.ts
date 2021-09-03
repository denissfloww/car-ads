import { MigrationInterface, QueryRunner } from "typeorm";
import { testUserUUID } from "./const";
import { Status } from "../enums/AdStatusEnum";

export class AdsTable1629182753210 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "ads"
            (
              "id" integer generated always as identity
                constraint ads_pk
                  primary key,
                "user_id" uuid
                    constraint users_ads_fk
                        references users
                        on update cascade on delete cascade,
                "modification_id" int
                    constraint ads_modifications_fk
                        references modifications
                        on update cascade on delete cascade,
                "vin" character varying NOT NULL,        
                "mileage" bigint,
                "color" character varying,
                "description" character varying,
                "phone" bigint,
                "owners_count" bigint,
                "price" bigint,      
                "status" character varying,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now()
            )
            
            
            `
    );

    await queryRunner.query(
      `INSERT INTO "ads" (user_id, modification_id, vin, mileage, color, description, phone, owners_count, price, status) VALUES (                         
                          '${testUserUUID}',
                          '1',
                          'TEST2344VIN',
                          200000,
                          'blue',
                          'Продаю автомобиль Toyota Prius 2014 года выпуска, с правым рулем. Один хозяин. В России 2 года.
За это время приносил только положительные эмоции и существенную экономию семейного бюджета за счёт его расхода топлива и неломаемости. Обслуживался самостоятельно в соответствии с регламентом Тойота. Красивый серебристый цвет - металлик. В ДТП не участвовал, ничего не красилось, замечаний по кузову нет. От машины не избавляюсь, ещё бы ездил и ездил. Продаю т. к. теперь в него не умещаемся, покупаю 7ми местный Prius того же года. Попасть под замену батареи не боюсь. Для тех кто не в курсе вариатор в Приусе только название, никаких ремней как в классическом вариаторе там нет, только планетарный ряд и электромоторы, при этом отсутствует гидротрансформатор и фрикционы как в классическом автомате, так что ломаться в нем нечему. В ноябре делал диагностику гибридной системы в гибрид центре - все в норме, ВВБ живая. Любые проверки за ваш счёт.',
                            9199283415,
                          3,
                          6000000,
                          '${Status.Active}'                                                                                      
                                  )`
    );

    await queryRunner.query(
      `INSERT INTO "ads" (user_id, modification_id, vin, mileage, color, description, phone, owners_count, price, status) VALUES (                        
                          '${testUserUUID}',
                          '1',
                          'TEST3084VIN',
                          210541,
                          'red',
                          'Продам PRIUS 30 1.8 S- TOURING SELECTION 2012 рестайлинг. Есть в статистике.
Аукционник 3.5 В. Без косяков.
Красивый черный 202 цвет в идеальном состояние
Полная пошлина
ПТС ОРИГИНАЛ
В России 18.12.2017
Таможня Владивосток
Я второй хозяин

- В ДТП участие не принимал, весь в родной краске, ничего не менялось, не красилось, не откручивалось, сами все проверите (толщиномер в помощь). Техническое и внешнее состояние отличное, кузов отполирован, без царапин, весь ровный, есть пару сколов, без этого никак.',
                            9199283415,
                          3,
                          654000,
                          '${Status.Active}'
                                                                                                                         )`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "ads"`);
  }
}
