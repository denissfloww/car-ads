import {useNewsPageStyles} from "../../styles/muiStyles";
import {Container, Grid, Link, Paper} from "@material-ui/core";
import React, {useEffect} from "react";
import NewsCard from "../../components/NewsPageComponents/NewsCard";
import {fetchNews, selectNewsState} from "../../redux/slices/newsSlice";
import {useDispatch, useSelector} from "react-redux";
import SkeletonNewsCard from "../../components/NewsPageComponents/SkeletonNewsCard";


const NewsPage = () => {
    const classes = useNewsPageStyles();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchNews());
    }, []);
    const { news, loading } = useSelector(selectNewsState);
    console.log(news)
    return (
        <div className={classes.root}>
            <Paper className={classes.headerPaper}>
                <h1>Новости из мира авто</h1>
            </Paper>
            <Paper className={classes.newsPagePaper}>
                <Container style={{marginTop:'20px'}}>
                    <Grid container spacing={2}>
                        {loading? Array(10)
                                .fill(0)
                                .map((item, i) =>
                                    (<Grid item md={4}>
                                    <SkeletonNewsCard />
                                    </Grid>)
                                ):
                            news.map((value:any)=> (
                                    <Grid item md={4}>
                                        <NewsCard news={{
                                            url: value.url,
                                            title: value.title,
                                            urlToImage:value.urlToImage,
                                            description: value.description,
                                            source: value.source,
                                        }} />
                                    </Grid>
                            ))}
                    </Grid>
                </Container>
            </Paper>
        </div>
    )
}

export default NewsPage;