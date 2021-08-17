import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { makeStyles } from '@material-ui/core/styles';

interface IProps {
  model: string;
}

const useStyles = makeStyles({
  card: {
    display: 'flex',
    textAlign: 'left',
    height: 330,
    marginBottom: 10,
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    padding: 15,
    width: 350,
  },
});

const UserAdCard = (props: any) => {
  const items = [
    {
      name: 'Random Name #1',
      description: 'Probably the most random thing you have ever seen!',
    },
    {
      name: 'Random Name #2',
      description: 'Hello World!',
    },
  ];
  const classes = useStyles();
  return (
    <Grid item md={11} style={{ margin: '0 auto' }}>
      <CardActionArea component='a' href='#'>
        <Card className={classes.card}>
          <CardMedia className={classes.cardMedia}>
            <Carousel autoPlay={false} timeout={200}>
              {items.map((item, i) => (
                <img
                  style={{ borderRadius: 5 }}
                  width={350}
                  src='https://avatars.mds.yandex.net/get-autoru-vos/1711983/4c3361bade11d7b9fbd81257ab3f19e3/1200x900n'
                />
              ))}
            </Carousel>
          </CardMedia>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography>title</Typography>
              <Typography variant='subtitle1' color='textSecondary'>
                date
              </Typography>
              <Typography variant='subtitle1' paragraph>
                description
              </Typography>
            </CardContent>
          </div>
        </Card>
      </CardActionArea>
    </Grid>
  );
};

export default UserAdCard;
