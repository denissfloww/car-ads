import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Bodies } from "./Bodies";
import { Brands } from "./Brands";
import { Drives } from "./Drives";
import { EngineTypes } from "./EngineTypes";
import { Gearboxes } from "./Gearboxes";
import { Generations } from "./Generations";

@Index("models_pk", ["id"], { unique: true })
@Entity("models", { schema: "public" })
export class Models {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "name" })
  name: string;

  @Column("double precision", { name: "engine_capacity", precision: 53 })
  engineCapacity: number;

  @Column("integer", { name: "hp" })
  hp: number;

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

  @ManyToOne(() => Bodies, (bodies) => bodies.models, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "body_id", referencedColumnName: "id" }])
  body: Bodies;

  @ManyToOne(() => Brands, (brands) => brands.models, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "brand_id", referencedColumnName: "id" }])
  brand: Brands;

  @ManyToOne(() => Drives, (drives) => drives.models, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "drive_id", referencedColumnName: "id" }])
  drive: Drives;

  @ManyToOne(() => EngineTypes, (engineTypes) => engineTypes.models, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "engine_type_id", referencedColumnName: "id" }])
  engineType: EngineTypes;

  @ManyToOne(() => Gearboxes, (gearboxes) => gearboxes.models, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "gearbox_id", referencedColumnName: "id" }])
  gearbox: Gearboxes;

  @ManyToOne(() => Generations, (generations) => generations.models, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "generation_id", referencedColumnName: "id" }])
  generation: Generations;
}
