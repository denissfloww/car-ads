import { Entity, Column, OneToMany } from "typeorm";
import { Ads } from "./Ads";
import BaseModel from './BaseModel';

@Entity({ name: 'users' })
export class User extends BaseModel {
  @Column({ type: 'varchar', length: 20 })
  username: string;

  @Column()
  passwordHash: string;
  @OneToMany(() => Ads, (ads) => ads.user)
  ads: Ads[];
}
