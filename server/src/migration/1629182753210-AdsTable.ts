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
                "year_release" int,
                "status" character varying,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now()
            )
            
            
            `
    );
    //1
    await queryRunner.query(
      `INSERT INTO "ads" (user_id, modification_id, vin, mileage, color, description, phone, owners_count, price, status, year_release) VALUES (                         
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
                          '${Status.Active}',
                          '2016'                                                                                                              
                                  )`
    );
    //2
    await queryRunner.query(
      `INSERT INTO "ads" (user_id, modification_id, vin, mileage, color, description, phone, owners_count, price, status, year_release) VALUES (                        
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
                          '${Status.Active}',
                          '2017'
                                                                                                                                              )`
    );
    //3
    await queryRunner.query(
      `INSERT INTO "ads" (user_id, modification_id, vin, mileage, color, description, phone, owners_count, price, status, year_release) VALUES (                        
                          '${testUserUUID}',
                          '15',
                          'TEST3084VIN',
                          30000,
                          'white',
                          'Немецкая сборка. Очень шустрый и приятный автомобиль на полном приводе, 245 сил, никакого чип тюнинга, и так быстро едет.',
                            9199283415,
                          1,
                          1654000,
                          '${Status.Active}',
                          '2012'
                                                                                                                                              )`
    );
    //4
    await queryRunner.query(
      `INSERT INTO "ads" (user_id, modification_id, vin, mileage, color, description, phone, owners_count, price, status, year_release) VALUES (                        
                          '${testUserUUID}',
                          '11',
                          'TEST3084VIN',
                          10000,
                          'white',
                          'Великолепный автомобиль, который дарит радость от вождения и обладания каждый день. Чувство уверенности которое испытываешь каждый раз, когда автомобиль послушно и четко откликается на твои действия вне зависимости от ситуации, заставляет с уважением и гордость принимать все  невероятные шедевры инженерной мысли и воплощения от BMW. Великолепен во всем! от динамики до мельчайшей продуманной эргономики и дизайна.',
                            9199283415,
                          2,
                          1230000,
                          '${Status.Active}',
                          '2019'
                                                                                                                                              )`
    );
    //5
    await queryRunner.query(
        `INSERT INTO "ads" (user_id, modification_id, vin, mileage, color, description, phone, owners_count, price, status, year_release) VALUES (                        
                          '${testUserUUID}',
                          '22',
                          'TEST3084VIN',
                          40000,
                          'white',
                          'Автомобиль продается от официального дилерского центра РРТ Автомаркет',
                            9199283415,
                          2,
                          1909000,
                          '${Status.Active}',
                          '2015'
                                                                                                                                              )`
    );
    //6
    await queryRunner.query(
        `INSERT INTO "ads" (user_id, modification_id, vin, mileage, color, description, phone, owners_count, price, status, year_release) VALUES (                        
                          '${testUserUUID}',
                          '25',
                          'TEST3084VIN',
                          140000,
                          'white',
                          'птс оригинал
✅2ключа
✅сигнализация с обратной связью
✅1дтп по базе гибдд (по правому зеркалу)
✅технически без нареканий
✅кожаный салон
✅камера заднего вида
✅бесключевой доступ
✅парктроники перед зад
✅Bluetooth
✅датчики света и дождя
✅подогрев сидений
',
                            9199283415,
                          3,
                          1249000,
                          '${Status.Active}',
                          '2013'
                                                                                                                                              )`
    );

    //7
    await queryRunner.query(
        `INSERT INTO "ads" (user_id, modification_id, vin, mileage, color, description, phone, owners_count, price, status, year_release) VALUES (                        
                          '${testUserUUID}',
                          '27',
                          'TEST3084VIN',
                          227000,
                          'white',
                          '2- хозяина Пробег родной 100% Крашены три элемент (без шпакли косметически) Хорошая комплектация Полноценный автомат. Юридически чистый Все работает без нареканий',
                            9199283415,
                          2,
                          1490000,
                          '${Status.Active}',
                          '2014'
                                                                                                                                              )`
    );

    //8
    await queryRunner.query(
        `INSERT INTO "ads" (user_id, modification_id, vin, mileage, color, description, phone, owners_count, price, status, year_release) VALUES (                        
                          '${testUserUUID}',
                          '29',
                          'TEST3084VIN',
                          15000,
                          'white',
                          'ОРИГИНАЛ ПТС!!!....ОДИН СОБСТВЕННИК!!!..... ЗАВОДСКОЙ ОКРАС!!!.....
Возможно!!
Кредит по двум документам
Кредит без первоначального взноса
Обмен на Ваш автомобиль',
                            9199283415,
                          1,
                          1597000,
                          '${Status.Active}',
                          '2019'
                                                                                                                                              )`
    );

    //9
    await queryRunner.query(
        `INSERT INTO "ads" (user_id, modification_id, vin, mileage, color, description, phone, owners_count, price, status, year_release) VALUES (                        
                          '${testUserUUID}',
                          '32',
                          'TEST3084VIN',
                          149000,
                          'white',
                          '2014 год по ПТС. По факту три владельца. Состояние "как новый". Пробег подтвержденный. Два комплекта шин.',
                            9199283415,
                          3,
                          1095000,
                          '${Status.Active}',
                          '2014'
                                                                                                                                              )`
    );

    //10
    await queryRunner.query(
        `INSERT INTO "ads" (user_id, modification_id, vin, mileage, color, description, phone, owners_count, price, status, year_release) VALUES (                        
                          '${testUserUUID}',
                          '34',
                          'TEST3084VIN',
                          163000,
                          'white',
                          '1 владелец, ПТС оригинал. Без ДТП и расчетов. Оригинальный тюнинг ABT внешнего дизайна и тормозной системы очень богатая комплектация с комфортным доступом и 4-х зонным климатом',
                            9199283415,
                          1,
                          2495000,
                          '${Status.Active}',
                          '2015'
                                                                                                                                              )`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "ads"`);
  }
}
