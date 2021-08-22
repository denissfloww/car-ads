import {Card, Grid} from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import NumberFormat from "react-number-format";
import React from "react";
import {useCatalogPageStyles} from "../styles/muiStyles";
import {Skeleton} from "@material-ui/lab";

const images = [1,2,3]
interface CatalogAdProps {
    loading?: boolean
}
const CatalogAdCard = (props: CatalogAdProps) => {

    const {loading} = props;
    const classes = useCatalogPageStyles()

    return (
        <Card className={classes.cardRoot}>
            <Grid container spacing={3} >
                <Grid md={5} item className={classes.imgGrid} >
                    {loading? (
                        <Skeleton animation="wave" variant="rect" className={classes.cardImg} />
                    ): (
                        <Carousel autoPlay={false} timeout={200}>
                            {images.map((item, i) => (
                                <img
                                    src="https://source.unsplash.com/random"
                                    className={classes.cardImg} />
                            ))}
                        </Carousel>
                    )}

                </Grid>
                <Grid item md={4} className={classes.cardInfo}>
                    {loading? (
                        <>
                            <h1> <Skeleton animation="wave" /></h1>
                            <p>
                                <Skeleton animation="wave" />
                            </p>
                            <p>
                                <Skeleton animation="wave" width="80%" />
                            </p>
                            <p>
                                <Skeleton animation="wave" width="80%" />
                            </p>
                            <p>
                                <Skeleton animation="wave" width="80%" />
                            </p>
                        </>
                        ) : (
                        <>
                            <h1>BMW 3</h1>
                            <p >Оьъем -
                                <b>2.0 л</b>
                            </p>
                            <p>Двигатель -
                                <b>Бензиновый</b>
                            </p>
                            <p>
                                <b>123 л.с</b>
                            </p>
                            <p>Пробег -
                                <b> <NumberFormat value={1000000} displayType='text' thousandSeparator=' ' /> км</b>
                            </p>
                            <p>
                                Коробка передач - <b> Механическая</b>
                            </p>
                            <p>
                                Год выпуска - <b> 2008</b>
                            </p>
                        </>
                        )}
                </Grid>
                <Grid md container justify='flex-end' item>
                    <Grid item style={{marginRight:'20px'}}>
                        {loading? (
                            <>
                                <h1>
                                    <Skeleton animation="wave" width={100} />
                                </h1>
                            </>
                        ):(
                            <h1 className={classes.priceHeader}>
                                <NumberFormat value={1000000} displayType='text' thousandSeparator=' ' prefix='₽ ' />
                            </h1>
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    )
}

export default CatalogAdCard