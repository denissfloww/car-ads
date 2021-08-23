import { Card, Grid } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';
import NumberFormat from 'react-number-format';
import React from 'react';
import { useCatalogPageStyles } from '../../styles/muiStyles';
import { Skeleton } from '@material-ui/lab';

const SkeletonCatalogAdCard = () => {
  const classes = useCatalogPageStyles();

  return (
    <Card className={classes.cardRoot}>
      <Grid container spacing={3}>
        <Grid md={5} item className={classes.imgGrid}>
          <Skeleton animation='wave' variant='rect' className={classes.cardImg} height={300} />
        </Grid>
        <Grid item md={4} className={classes.cardInfo}>
          <>
            <h1>
              {' '}
              <Skeleton animation='wave' />
            </h1>
            <p>
              <Skeleton animation='wave' />
            </p>
            <p>
              <Skeleton animation='wave' width='80%' />
            </p>
            <p>
              <Skeleton animation='wave' width='80%' />
            </p>
            <p>
              <Skeleton animation='wave' width='80%' />
            </p>
          </>
        </Grid>
        <Grid md container justify='flex-end' item>
          <Grid item style={{ marginRight: '20px' }}>
            <h1>
              <Skeleton animation='wave' width={100} />
            </h1>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default SkeletonCatalogAdCard;
