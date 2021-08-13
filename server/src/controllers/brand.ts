import {Request, Response} from "express";
import {getRepository} from "typeorm";
import {Brands} from "../entity/Brands";

export const getBrands = async (req: Request, res: Response) => {
    const brands = await getRepository(Brands).find();
    if (!brands){
        return res.status(404).send('Не найдено');
    }
    return res.status(200).json(brands);
};