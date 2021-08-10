import {Request, Response} from "express";
import {getRepository} from "typeorm";
import {Models} from "../entity/Models";

export const getModelByBrand = async (req: Request, res: Response) => {
    const brandId = Number(req.params.brandId);
    const models = await getRepository(Models)
        .createQueryBuilder("model")
        .where(
            "model.brand_id = :id", { id: brandId }
        ).getMany();
    if (!models){
        return res.status(404).send('Не найдено');
    }
    return res.status(200).json(models);
};