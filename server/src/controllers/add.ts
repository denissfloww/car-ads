import {Request, Response} from "express";
import path from "path";
import { getConnection, getRepository } from "typeorm";
import { AdImage } from "../entity/AdImage";
import { Ads } from "../entity/Ads";

export const saveAd = async (req: Request, res: Response) => {
    const { userId, modificationId, vin, mileage, color, description, phone, ownersСount, price, images } = req.body;


    const ad = await getRepository(Ads).save({
         user: userId,
         modification: modificationId,
         vin:vin,
         mileage:mileage,
         color:color,
         description:description,
         phone:phone,
         ownersCount: ownersСount,
         price:price,
    })
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    req.files.map(async (file: any) => {
      const ad_image = await getRepository(AdImage).save({ad: (ad.id as any), imageName: file.filename})
    })
    return res.status(200).send('saved!');
};

export const getImageTest =  async (req: Request, res: Response) => {
    res.set({'Content-Type': 'image/png', 'Access-Control-Allow-Origin': '*'});
    const pathToImage = path.join(__dirname, '../../upload/', '1629188831788SNAG-0000.png')
    console.log(pathToImage)
    return res.status(200).sendFile(pathToImage);
}