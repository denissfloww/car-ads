import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-material-ui-carousel';
import NumberFormat from 'react-number-format';
import { Link as RouterLink } from "react-router-dom";
import { NoImageUrl } from "../../const/noImageUrl";
import { AdImage } from "../../interfaces/AdImage";
import { usePersonalAccountStyles } from "../../styles/muiStyles";
import { getFullImageUrl } from "../../utils/HelperFunc";
import { Link } from 'react-router-dom';

interface IProps {
  id: string;
  brand: string;
  model: string;
  images: AdImage[];
  countOwners: number;
  price: number;
  description: string;
}


const UserAdCard = (props: IProps) => {
  const { brand, model, images, countOwners, price, description, id } = props;
  const classes = usePersonalAccountStyles();
  return (

    <Grid item xs={12} sm={12} md={6}>
      <Link style={{ textDecoration: 'none' }} to={`ad/${id}`}>
      {/*<Button style={{ textTransform: 'capitalize' }}  to={`ad/${id}`} component={RouterLink}>*/}
      <Card className={classes.card}>
        <CardMedia>
          {images.length ? (
            <Carousel autoPlay={false} timeout={200}>
              {images.map((item, i) => (
                <img style={{ borderRadius: 5 }}
                     onError={
                       ((event: any) => event.target.src = 'https://www.samsung.com/etc/designs/smg/global/imgs/support/cont/NO_IMG_600x600.png')
                     }
                     width='100%'
                     src={getFullImageUrl(item.imageName)} />
              ))}
            </Carousel>
          ): (
            <img style={{ borderRadius: 5 }} width='100%' src={NoImageUrl} />
          )}

        </CardMedia>
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant='h6' component='h3'>
            {brand} {model}
          </Typography>
          <Typography variant='h5' component='h2'>
            <NumberFormat value={price} displayType='text' thousandSeparator=' ' prefix='₽ ' />
          </Typography>
          <Typography color="textSecondary" style={{marginTop:'10px', fontSize:'11pt', color:'#388e3c'}}>
            Активно
          </Typography>
          <Typography color="textSecondary">
            <b>Описание:</b> {description}
          </Typography>
          <Typography color="textSecondary">
            <b>Колличество владельцев:</b> {countOwners}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardAction}>
          <Button color='secondary'>Удалить</Button>
        </CardActions>
      </Card>
      {/*</Button>*/}
      </Link>
    </Grid>
  );
};

export default UserAdCard;