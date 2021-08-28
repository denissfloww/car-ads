import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import { Skeleton } from "@material-ui/lab";
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-material-ui-carousel';
import NumberFormat from 'react-number-format';
import { AdImage } from "../../interfaces/AdImage";
import { usePersonalAccountStyles } from "../../styles/muiStyles";



const SkeletonUserAdCard = () => {
  const classes = usePersonalAccountStyles();
  return (
    <Grid item xs={12} sm={12} md={6}>
      <Card className={classes.card}>
        <CardMedia>
          <Skeleton animation='wave' variant='rect' height={300} />
        </CardMedia>
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant='h6' component='h3'>
            <Skeleton animation='wave' />
          </Typography>
          <Typography variant='h5' component='h2'>
            <Skeleton animation='wave' />
          </Typography>
          <Typography color="textSecondary" style={{marginTop:'10px', fontSize:'11pt', color:'#388e3c'}}>
            <Skeleton animation='wave' />
          </Typography>
          <Typography color="textSecondary">
            <Skeleton animation='wave' />
          </Typography>
          <Typography color="textSecondary">
            <Skeleton animation='wave' />
          </Typography>
        </CardContent>
        <CardActions className={classes.cardAction}>
          <Skeleton animation='wave' />
        </CardActions>
      </Card>
    </Grid>
  );
};

export default SkeletonUserAdCard;
