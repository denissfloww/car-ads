import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@material-ui/core";
import React from "react";
import {Skeleton} from "@material-ui/lab";

const SkeletonNewsCard = () => {
    return (
        <Card style={{margin:'0 auto'}}>
            <CardActionArea>
                <CardContent>
                    <Typography align='left' gutterBottom variant="h5" component="div">
                        <Skeleton animation='wave' />
                    </Typography>
                    <Typography align='left'>
                        <Skeleton animation='wave' width='80%' />
                        <Skeleton animation='wave' />
                        <Skeleton animation='wave' />
                    </Typography>

                </CardContent>
                <CardMedia style={{padding:'10px'}}>
                    <Skeleton animation='wave' variant='rect' height={300} />
                </CardMedia>
                <CardContent>
                    <Typography align='left'>
                        <span style={{opacity:'60%'}}><Skeleton animation='wave' /></span>
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default SkeletonNewsCard;