import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Modifications } from "./Modifications";

@Index("body_pk", ["id"], { unique: true })
@Entity("bodies", { schema: "public" })
export class Bodies {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "name" })
  name: string;

  @Column("character varying", { name: "image_url", nullable: true })
  imageUrl: string | null;

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

  @OneToMany(() => Modifications, (modifications) => modifications.body)
  modifications: Modifications[];
}
