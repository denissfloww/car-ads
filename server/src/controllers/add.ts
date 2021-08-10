import {Request, Response} from "express";
import path from "path";

export const saveAd = async (req: Request, res: Response) => {
    const { all } = req.body;
    console.log(all)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    req.files.map((file: any) => {
        console.log(file.filename)
    })
    return res.status(200).send('saved!');
};

export const getImageTest =  async (req: Request, res: Response) => {
    res.set({'Content-Type': 'image/png'});
    const pathToImage = path.join(__dirname, '../../upload/', '1627899280321SNAG-0002.png')
    console.log(pathToImage)
    return res.status(200).sendFile(pathToImage);
}