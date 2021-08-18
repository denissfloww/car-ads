import {Request, Response} from "express";
import {getRepository} from "typeorm";
import {Models} from "../entity/Models";
import {Modifications} from "../entity/Modifications";
import {Bodies} from "../entity/Bodies";
import {Generations} from "../entity/Generations";
import {EngineTypes} from "../entity/EngineTypes";
import {Drives} from "../entity/Drives";
import {Gearboxes} from "../entity/Gearboxes";

export const getYears = async (req: Request, res: Response) => {
    const modelId = Number(req.query.modelId)
    const years = await getRepository(Modifications)
        .createQueryBuilder("modification")
        .select("modification")
        .where(
            "modification.model_id= :id", {id: modelId}
        )
        .select(["modification.year_release"])
        .execute();

    if(!years){
        return res.status(404).send('Не найдено');
    }

    let result = years.map(({ year_release } : any) => year_release)

    return res.status(200).json(result);
}

export const getBodies = async (req: Request, res: Response) => {
    const modelId = Number(req.query.modelId)
    const year = Number(req.query.year)

    const bodies = await getRepository(Modifications)
        .createQueryBuilder("modification")
        .leftJoinAndMapOne( "modification.id",Bodies, "body", "modification.body_id = body.id")
        .select(["body.id AS id", "body.name AS name"])
        .where("modification.year_release = :year", {year: year})
        .andWhere("modification.model_id = :modelId", {modelId: modelId})
        .execute()

    if(!bodies){
        return res.status(404).send('Не найдено');
    }

    return res.status(200).json(bodies);
}

export const getGenerations = async (req: Request, res: Response) => {
    const modelId = Number(req.query.modelId)
    const year = Number(req.query.year)
    const bodyId = Number(req.query.bodyId)

    const generations = await getRepository(Modifications)
        .createQueryBuilder("modification")
        .leftJoinAndMapOne( "modification.id", Generations, "generation", "modification.generation_id = generation.id")
        .where("modification.model_id = :modelId", {modelId: modelId})
        .andWhere("modification.body_id = :bodyId", {bodyId: bodyId})
        .andWhere("generation.year_from <= :year", {year: year})
        .andWhere("generation.year_to >= :year", {year: year})
        .select(["generation.id AS id", "generation.name AS name", "generation.image_url AS image"])
        .execute()

    if(!generations){
        return res.status(404).send('Не найдено');
    }

    return res.status(200).json(generations);
}

export const getEngines = async (req: Request, res: Response) => {
    const modelId = Number(req.query.modelId)
    const bodyId = Number(req.query.bodyId)
    const generationId = Number(req.query.generationId)

    const engines = await getRepository(Modifications)
        .createQueryBuilder("modification")
        .leftJoinAndMapOne( "modification.id", EngineTypes, "engineTypes", "modification.engine_type_id = engineTypes.id")
        .where("modification.model_id = :modelId", {modelId: modelId})
        .andWhere("modification.body_id = :bodyId", {bodyId: bodyId})
        .andWhere("modification.generation_id = :generationId", {generationId: generationId})
        .select(["engineTypes.id AS id", "engineTypes.name AS name"])
        .execute()

    if(!engines){
        return res.status(404).send('Не найдено');
    }

    return res.status(200).json(engines);
}

export const getDrives = async (req: Request, res: Response) => {
    const modelId = Number(req.query.modelId)
    const bodyId = Number(req.query.bodyId)
    const generationId = Number(req.query.generationId)
    const engineId = Number(req.query.engineId)

    const engines = await getRepository(Modifications)
        .createQueryBuilder("modification")
        .leftJoinAndMapOne( "modification.id", Drives, "drive", "modification.drive_id = drive.id")
        .where("modification.model_id = :modelId", {modelId: modelId})
        .andWhere("modification.body_id = :bodyId", {bodyId: bodyId})
        .andWhere("modification.generation_id = :generationId", {generationId: generationId})
        .andWhere("modification.engine_type_id = :engineId", {engineId: engineId})
        .select(["drive.id AS id", "drive.name AS name"])
        .execute()

    if(!engines){
        return res.status(404).send('Не найдено');
    }

    return res.status(200).json(engines);
}

export const getGearboxes = async (req: Request, res: Response) => {
    const modelId = Number(req.query.modelId)
    const bodyId = Number(req.query.bodyId)
    const generationId = Number(req.query.generationId)
    const engineId = Number(req.query.engineId)
    const driveId = Number(req.query.driveId)

    const gearboxes = await getRepository(Modifications)
        .createQueryBuilder("modification")
        .leftJoinAndMapOne( "modification.id", Gearboxes, "gearbox", "modification.gearbox_id = gearbox.id")
        .where("modification.model_id = :modelId", {modelId: modelId})
        .andWhere("modification.body_id = :bodyId", {bodyId: bodyId})
        .andWhere("modification.generation_id = :generationId", {generationId: generationId})
        .andWhere("modification.engine_type_id = :engineId", {engineId: engineId})
        .andWhere("modification.drive_id = :driveId", {driveId: driveId})
        .select(["gearbox.id AS id", "gearbox.name AS name"])
        .execute()

    if(!gearboxes){
        return res.status(404).send('Не найдено');
    }

    return res.status(200).json(gearboxes);
}

export const getModifications = async (req: Request, res: Response) => {
    const modelId = Number(req.query.modelId)
    const bodyId = Number(req.query.bodyId)
    const generationId = Number(req.query.generationId)
    const engineId = Number(req.query.engineId)
    const driveId = Number(req.query.driveId)
    const gearboxId = Number(req.query.gearboxId)

    const modifications = await getRepository(Modifications)
        .createQueryBuilder("modification")
        .where("modification.model_id = :modelId", {modelId: modelId})
        .andWhere("modification.body_id = :bodyId", {bodyId: bodyId})
        .andWhere("modification.generation_id = :generationId", {generationId: generationId})
        .andWhere("modification.engine_type_id = :engineId", {engineId: engineId})
        .andWhere("modification.drive_id = :driveId", {driveId: driveId})
        .andWhere("modification.gearbox_id = :gearboxId", {gearboxId: gearboxId})
        .getMany()

    if(!modifications){
        return res.status(404).send('Не найдено');
    }

    return res.status(200).json(modifications);
}