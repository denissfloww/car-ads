import {Request, Response} from "express";

export const saveAd = async (req: Request, res: Response) => {
    const { a } = req.body;
    console.log(a)
    return res.status(200).send('saved!');
};