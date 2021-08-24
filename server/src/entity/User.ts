import { Entity, Column, OneToMany } from "typeorm";
import { Ads } from "./Ads";
import BaseModel from './BaseModel';
import {UserCompareAd} from "./UserCompareAd";
import {UserFavouriteAd} from "./UserFavouriteAd";

@Entity({ name: 'users' })
export class User extends BaseModel {
  @Column({ type: 'varchar', length: 20 })
  username: string;

  @Column()
  passwordHash: string;
  @OneToMany(() => Ads, (ads) => ads.user)
  ads: Ads[];
  @OneToMany(() => UserCompareAd, (userCompareAd) => userCompareAd.user)
  userCompareAds: UserCompareAd[];

  @OneToMany(() => UserFavouriteAd, (userFavouriteAd) => userFavouriteAd.user)
  userFavouriteAds: UserFavouriteAd[];
}
