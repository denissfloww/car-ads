import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Ads } from "./Ads";

@Index("ad_image_pk", ["id"], { unique: true })
@Entity("ad_image", { schema: "public" })
export class AdImage {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "image_name", nullable: true })
  imageName: string | null;

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

  @ManyToOne(() => Ads, (ads) => ads.adImages, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "ad_id", referencedColumnName: "id" }])
  ad: Ads;
}
