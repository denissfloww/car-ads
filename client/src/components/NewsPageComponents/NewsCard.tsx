import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@material-ui/core";
import React from "react";
import {News} from "../../interfaces/News";

interface IProps {
    news: News;
}

const NewsCard = (props: IProps) => {
    const {news } = props;

    return (
        <Card style={{margin:'0 auto'}}>
            <CardActionArea href={news.url} target="_blank">
                <CardContent>
                    <Typography align='left' gutterBottom variant="h5" component="div">
                        <b>{news.title}</b>
                    </Typography>
                    <Typography align='left'>
                        {news.description}
                    </Typography>

                </CardContent>
                <CardMedia style={{padding:'10px'}}>
                    <img
                        width='100%'
                        style={{borderRadius:'4px'}}
                        src={news.urlToImage}
                    />
                </CardMedia>
                <CardContent>
                    <Typography align='left'>
                        <span style={{opacity:'60%'}}>Источник: {news.source.name}</span>
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default NewsCard;