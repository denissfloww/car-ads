import {Request, Response} from "express";
import path from "path";
import {getRepository} from "typeorm";
import {AdImage} from "../entity/AdImage";
import {Ads} from "../entity/Ads";
import {Modifications} from "../entity/Modifications";
import {UserFavouriteAd} from "../entity/UserFavouriteAd";
import {UserCompareAd} from "../entity/UserCompareAd";
// @ts-ignore
import EasyYandexS3 from "easy-yandex-s3";
import {Status} from "../enums/AdStatusEnum";

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

  const s3 = new EasyYandexS3({
    auth: {
      accessKeyId: process.env.ACCESS_KEY_ID,
      secretAccessKey: process.env.SECRET_ACCESS_KEY,
    },
    Bucket: process.env.BUCKET_NAME,
  });

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
    status: Status.Active
  });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  req.files.map(async (file: any) => {
    const buffer = file.buffer;
    const upload = await s3.Upload({ buffer }, "/images/");
    const ad_image = await getRepository(AdImage).save({
      ad: ad.id as any,
      imageName: upload.Location,
    });
  });
  return res.status(200).send("saved!");
};

export const deleteAd = async (req: Request, res: Response) => {
  const { id } = req.body;
  await getRepository(Ads)
    .createQueryBuilder()
    .delete()
    .where("id = :id", { id: id })
    .execute();
  return res.status(200).send("deleted");
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

export const getCountPage = async (req: Request, res: Response) => {
  const size: number = +(req.query.size || 5);
  const [list, count] = await getRepository(Ads).findAndCount();
  const pageCount = Math.ceil(count / size);
  return res.status(200).json(pageCount);
};

export const getAds = async (req: Request, res: Response) => {
  const page: number = +(req.query.page || 1);
  const size: number = +(req.query.size || 5);
  const skippedItems: number = (page - 1) * size;

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
    .leftJoinAndSelect("modification.drive", "drive")
    .leftJoinAndSelect("modification.generation", "generation")
    .leftJoinAndSelect("modification.engineType", "engineType")
    .skip(skippedItems)
    .take(size)
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
    .leftJoinAndSelect("modification.drive", "drive")
    .leftJoinAndSelect("modification.generation", "generation")
    .leftJoinAndSelect("modification.engineType", "engineType")
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
    .leftJoinAndSelect("modification.drive", "drive")
    .leftJoinAndSelect("modification.engineType", "engineType")
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
