import { MigrationInterface, QueryRunner } from 'typeorm';
import bcrypt from 'bcrypt';
import { testUserUUID } from "./const";

export class createSchema1610529720088 implements MigrationInterface {
  name = 'createSchema1610529720088';

  public async up(queryRunner: QueryRunner): Promise<void> {
    const password = await bcrypt.hash('password', 10)
    await queryRunner.query(
      `CREATE TABLE "users" 
                (
                    "id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
                    "createdAt" TIMESTAMP NOT NULL DEFAULT now(), 
                    "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), 
                    "username" character varying(20) NOT NULL, 
                    "passwordHash" character varying NOT NULL, 
                    CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id")
                )`
    );
    await queryRunner.query(
        `INSERT INTO "users" VALUES ('${testUserUUID}', now(), now(), 'test', '${password}') `
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "users"`);
  }
}
