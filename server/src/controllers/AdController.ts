import exp from "constants";
import { Request, Response } from "express";
import path from "path";
import { getConnection, getRepository } from "typeorm";
import { AdImage } from "../entity/AdImage";
import { Ads } from "../entity/Ads";
import { Bodies } from "../entity/Bodies";
import { Models } from "../entity/Models";
import { Modifications } from "../entity/Modifications";
import { UserFavouriteAd } from "../entity/UserFavouriteAd";
import { UserCompareAd } from "../entity/UserCompareAd";

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
};

export const getAdById = async (req: Request, res: Response) => {
  const adId = req.params.adId;

  const ad = await getRepository(Ads)
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
    .where("ad.id = :adId", { adId })
    .getOne();

  return res.status(200).json(ad);
};

export const insertFavouriteUserAd = async (req: Request, res: Response) => {
  const { userId, adId } = req.body;
  console.log(userId, adId);
  await getRepository(UserFavouriteAd)
    .createQueryBuilder()
    .insert()
    .values({
      user: userId,
      ad: adId,
    })
    .execute();
  return res.status(200).json("success");
};

export const deleteFavouriteUserAd = async (req: Request, res: Response) => {
  const { id } = req.params;
  await getRepository(UserFavouriteAd)
    .createQueryBuilder("user_favourite_ad")
    .delete()
    .where("user_favourite_ad.id = :id", { id })
    .execute();
  return res.status(200).json("success");
};

export const getUserFavouriteAds = async (req: Request, res: Response) => {
  const { userId } = req.query;
  const favouriteAds = await getRepository(UserFavouriteAd)
    .createQueryBuilder("user_favourite_ad")
    .where("user_favourite_ad.user_id = :userId", { userId })
    .getMany();
  return res.status(200).json(favouriteAds);
};

export const checkAlreadyInUserFavouriteAd = async (
  req: Request,
  res: Response
) => {
  const { userId, adId } = req.query;

  const [list, count] = await getRepository(UserFavouriteAd).findAndCount({
    where: [{ user: userId, ad: adId }],
  });
  return res.status(200).json(count >= 1);
};

export const insertCompareUserAd = async (req: Request, res: Response) => {
  const { userId, adId } = req.body;
  console.log(userId, adId);
  await getRepository(UserCompareAd)
    .createQueryBuilder()
    .insert()
    .values({
      user: userId,
      ad: adId,
    })
    .execute();
  return res.status(200).json("success");
};

export const deleteCompareUserAd = async (req: Request, res: Response) => {
  const { id } = req.params;
  await getRepository(UserCompareAd)
    .createQueryBuilder("user_compare_ad")
    .delete()
    .where("user_compare_ad.id = :id", { id })
    .execute();
  return res.status(200).json("success");
};

export const getUserCompareAds = async (req: Request, res: Response) => {
  const { userId } = req.query;
  const favouriteAds = await getRepository(UserCompareAd)
    .createQueryBuilder("user_compare_ad")
    .leftJoinAndMapOne(
      "user_compare_ad.ad",
      Ads,
      "ad",
      "user_compare_ad.ad_id = ad.id"
    )
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
    .where("user_compare_ad.user_id = :userId", { userId })
    .getMany();
  console.log(favouriteAds);
  return res.status(200).json(favouriteAds);
};

export const checkAlreadyInUserCompareAd = async (
  req: Request,
  res: Response
) => {
  const { userId, adId } = req.query;

  const [list, count] = await getRepository(UserCompareAd).findAndCount({
    where: [{ user: userId, ad: adId }],
  });
  return res.status(200).json(count >= 1);
};
