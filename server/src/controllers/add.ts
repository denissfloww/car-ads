import {Request, Response} from "express";

export const saveAd = async (req: Request, res: Response) => {
    const { all } = req.body;
    console.log(all)
    // @ts-ignore
    req.files.map((file: any) => {
        console.log(file.filename)
    })
    return res.status(200).send('saved!');
};