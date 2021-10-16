import {Request, Response} from "express";
import axios from 'axios';

export const getAllNews = async (req: Request, res: Response) => {
    const news_get = await axios.get('https://newsapi.org/v2/everything',{
        params: {
            q:'авто',//такой прикол потому что я не нашел нормальных api с новостями об авто
            sortBy: 'published',
            apiKey: process.env.NEWS_API_TOKEN
        }
    })

    return res.json(news_get.data)
}