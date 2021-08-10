import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Models } from "./Models";

@Index("generations_pk", ["id"], { unique: true })
@Entity("generations", { schema: "public" })
export class Generations {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "name" })
  name: string;

  @Column("character varying", { name: "image_url", nullable: true })
  imageUrl: string | null;

  @Column("integer", { name: "year_from" })
  yearFrom: number;

  @Column("integer", { name: "year_to" })
  yearTo: number;

  @Column("timestamp without time zone", {
    name: "createdAt",
    default: () => "now()",
  })
  createdAt: Date;

  @Column("timestamp without time zone", {
    name: "updatedAt",
    default: () => "now()",
  })
  updatedAt: Date;

  @OneToMany(() => Models, (models) => models.generation)
  models: Models[];
}
