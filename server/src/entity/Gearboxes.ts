import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Modifications } from "./Modifications";

@Index("gearboxes_pk", ["id"], { unique: true })
@Entity("gearboxes", { schema: "public" })
export class Gearboxes {
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

  @OneToMany(() => Modifications, (modifications) => modifications.gearbox)
  modifications: Modifications[];
}
