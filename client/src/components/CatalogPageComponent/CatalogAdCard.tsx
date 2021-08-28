import { Button, Card, Grid, Link } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';
import NumberFormat from 'react-number-format';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Ad } from '../../interfaces/Ad';
import { useCatalogPageStyles } from '../../styles/muiStyles';
import { Skeleton } from '@material-ui/lab';
import { NoImageUrl } from '../../const/noImageUrl';

interface CatalogAdProps {
  ad: Ad;
}

const CatalogAdCard = (props: CatalogAdProps) => {
  const { ad } = props;
  const classes = useCatalogPageStyles();
  console.log(ad.adImages.length);
  return (
    <Card className={classes.cardRoot}>
      <Grid container spacing={3}>
        <Grid md={5} item className={classes.imgGrid}>
          <div>
            {ad.adImages.length ? (
              <Carousel autoPlay={false} timeout={200}>
                {ad.adImages.map((item, i) => (
                  <img
                    onError={(event: any) =>
                      (event.target.src = 'https://www.samsung.com/etc/designs/smg/global/imgs/support/cont/NO_IMG_600x600.png')
                    }
                    src={item.imageName}
                    className={classes.cardImg}
                  />
                ))}
              </Carousel>
            ) : (
              <img style={{ borderRadius: 5 }} width='100%' src={NoImageUrl} />
            )}
          </div>
        </Grid>
        <Grid item md={4} className={classes.cardInfo}>
          <h1>
            {ad.modification.model.brand.name} {ad.modification.model.name} {ad.modification.generation.name}{' '}
          </h1>
          <p>
            Объем -<b>{ad.modification.engineCapacity} л</b>
          </p>
          <p>
            Двигатель - <b>{ad.modification.drive.name}</b>
          </p>
          <p>
            <b>{ad.modification.hp} л.с</b>
          </p>
          <p>
            Пробег -
            <b>
              {' '}
              <NumberFormat value={ad.mileage} displayType='text' thousandSeparator=' ' /> км
            </b>
          </p>
          <p>
            Коробка передач - <b> {ad.modification.gearbox.name}</b>
          </p>
          <p>
            Год выпуска - <b> {ad.modification.yearRelease}</b>
          </p>
        </Grid>
        <Grid md container justify='flex-end' item>
          <Grid item style={{ marginRight: '20px' }}>
            <h1 className={classes.priceHeader}>
              <NumberFormat value={ad.price} displayType='text' thousandSeparator=' ' prefix='₽ ' />
            </h1>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default CatalogAdCard;
