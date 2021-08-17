import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AdImage } from "./AdImage";
import { Modifications } from "./Modifications";
import { User } from "./User";

@Index("ads_pk", ["id"], { unique: true })
@Entity("ads", { schema: "public" })
export class Ads {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "vin" })
  vin: string;

  @Column("integer", { name: "mileage", nullable: true })
  mileage: number | null;

  @Column("character varying", { name: "color" })
  color: string;

  @Column("character varying", { name: "description" })
  description: string;

  @Column("bigint", { name: "phone", nullable: true })
  phone: string | null;

  @Column("character varying", { name: "owners_count" })
  ownersCount: string;

  @Column("bigint", { name: "price", nullable: true })
  price: string | null;

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

  @OneToMany(() => AdImage, (adImage) => adImage.ad)
  adImages: AdImage[];

  @ManyToOne(() => Modifications, (modifications) => modifications.ads, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "modification_id", referencedColumnName: "id" }])
  modification: Modifications;

  @ManyToOne(() => User, (user) => user.ads, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: User;
}
