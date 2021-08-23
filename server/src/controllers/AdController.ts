import exp from "constants";
import { Request, Response } from "express";
import path from "path";
import { getConnection, getRepository } from "typeorm";
import { AdImage } from "../entity/AdImage";
import { Ads } from "../entity/Ads";
import { Bodies } from "../entity/Bodies";
import { Models } from "../entity/Models";
import { Modifications } from "../entity/Modifications";

export const saveAd = async (req: Request, res: Response) => {
  const {
    userId,
    modificationId,
    vin,
    mileage,
    color,
    description,
    phone,
    ownersСount,
    price,
    images,
  } = req.body;

  const ad = await getRepository(Ads).save({
    user: userId,
    modification: modificationId,
    vin: vin,
    mileage: mileage,
    color: color,
    description: description,
    phone: phone,
    ownersCount: ownersСount,
    price: price,
  });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  req.files.map(async (file: any) => {
    console.log(file);
    const ad_image = await getRepository(AdImage).save({
      ad: ad.id as any,
      imageName: file.filename,
    });
  });
  return res.status(200).send("saved!");
};

export const getUserAds = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const ads = await getRepository(Ads)
    .createQueryBuilder("ad")
    .leftJoinAndMapOne(
      "ad.modification",
      Modifications,
      "modification",
      "ad.modification_id = modification.id"
    )
    .leftJoinAndSelect("modification.model", "model")
    .leftJoinAndSelect("model.brand", "brand")
    .leftJoinAndSelect("ad.adImages", "image")
    .where("ad.user_id = :userId", { userId })
    .getMany();
  return res.status(200).json(ads);
};

export const getImage = async (req: Request, res: Response) => {
  const { imageName } = req.params;
  console.log(imageName);
  res.set({ "Content-Type": "image/png", "Access-Control-Allow-Origin": "*" });
  const pathToImage = path.join(__dirname, "../../upload/", imageName);
  console.log(pathToImage);
  return res.status(200).sendFile(pathToImage);
};

export const getAds = async (req: Request, res: Response) => {
  const ads = await getRepository(Ads)
    .createQueryBuilder("ad")
    .leftJoinAndMapOne(
      "ad.modification",
      Modifications,
      "modification",
      "ad.modification_id = modification.id"
    )
    .leftJoinAndSelect("modification.model", "model")
    .leftJoinAndSelect("model.brand", "brand")
    .leftJoinAndSelect("ad.adImages", "image")
    .leftJoinAndSelect("modification.gearbox", "gearbox")
    .getMany();
  return res.status(200).json(ads);
}
