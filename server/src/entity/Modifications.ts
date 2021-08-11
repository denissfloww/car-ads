import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Bodies } from "./Bodies";
import { Drives } from "./Drives";
import { EngineTypes } from "./EngineTypes";
import { Gearboxes } from "./Gearboxes";
import { Generations } from "./Generations";
import { Models } from "./Models";

@Index("modifications_pk", ["id"], { unique: true })
@Entity("modifications", { schema: "public" })
export class Modifications {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("double precision", { name: "engine_capacity", precision: 53 })
  engineCapacity: number;

  @Column("integer", { name: "hp" })
  hp: number;

  @Column("integer", { name: "year_release", nullable: true })
  yearRelease: number | null;

  @Column("character varying", { name: "wheel" })
  wheel: string;

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

  @ManyToOne(() => Bodies, (bodies) => bodies.modifications, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "body_id", referencedColumnName: "id" }])
  body: Bodies;

  @ManyToOne(() => Drives, (drives) => drives.modifications, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "drive_id", referencedColumnName: "id" }])
  drive: Drives;

  @ManyToOne(() => EngineTypes, (engineTypes) => engineTypes.modifications, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "engine_type_id", referencedColumnName: "id" }])
  engineType: EngineTypes;

  @ManyToOne(() => Gearboxes, (gearboxes) => gearboxes.modifications, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "gearbox_id", referencedColumnName: "id" }])
  gearbox: Gearboxes;

  @ManyToOne(() => Generations, (generations) => generations.modifications, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "generation_id", referencedColumnName: "id" }])
  generation: Generations;

  @ManyToOne(() => Models, (models) => models.modifications, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "model_id", referencedColumnName: "id" }])
  model: Models;
}
