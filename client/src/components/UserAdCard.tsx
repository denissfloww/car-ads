import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-material-ui-carousel';
import NumberFormat from 'react-number-format';

interface IProps {
  brand: string;
  model: string;
  images: string[];
}

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingBottom: theme.spacing(8),
  },
  card: {
    fontFamily: 'Nunito',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    fontFamily: 'Nunito',
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  typography: {
    fontFamily: 'Nunito',
  },
  button:{
    fontFamily: 'Nunito',
  },
  cardAction:{
    justifyContent:"center"
  }
}));

const UserAdCard = (props: IProps) => {
  const { brand, model, images } = props;
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={12} md={6}>
      <Card className={classes.card}>
        <CardMedia>
          <Carousel autoPlay={false} timeout={200}>
            {images.map((item, i) => (
              <img style={{ borderRadius: 5 }} width='100%' src={item} />
            ))}
          </Carousel>
        </CardMedia>
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant='h6' component='h3' className={classes.typography}>
            {brand} {model}
          </Typography>
          <Typography variant='h5' component='h2' className={classes.typography}>
            <NumberFormat value={2456981} displayType='text' thousandSeparator=' ' prefix='₽ ' />
          </Typography>
          <Typography color="textSecondary" style={{marginTop:'10px', fontSize:'11pt', color:'#388e3c'}}>
            Активно
          </Typography>
          <Typography color="textSecondary">
            <b>Описание:</b> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequuntur deleniti eius laborum molestias pariatur vel. Ab, autem eligendi eum harum iste laudantium modi nam necessitatibus nihil quae tempore ut.
          </Typography>
          <Typography color="textSecondary">
            <b>Колличество владельцев:</b> 3
          </Typography>
        </CardContent>
        <CardActions className={classes.cardAction}>
          <Button className={classes.button} color='secondary'>Удалить</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default UserAdCard;
