import axios from "axios";
import backendUrl from "../BackendUrl";

const getNews = async () => {
    const response = await axios.get(`${backendUrl}/news`);
    console.log(response.data.articles)
    return response.data.articles;
};

const NewsService = { getNews };

export default NewsService;