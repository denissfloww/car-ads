import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Brands } from "./Brands";
import { Modifications } from "./Modifications";

@Index("models_pk", ["id"], { unique: true })
@Entity("models", { schema: "public" })
export class Models {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "name" })
  name: string;

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

  @ManyToOne(() => Brands, (brands) => brands.models, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "brand_id", referencedColumnName: "id" }])
  brand: Brands;

  @OneToMany(() => Modifications, (modifications) => modifications.model)
  modifications: Modifications[];
}
