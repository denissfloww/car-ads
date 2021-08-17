import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@material-ui/core";
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

interface IProps {
  model: string;
}

const useStyles = makeStyles((theme) => ({
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
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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
    <Container maxWidth="md" className={classes.cardGrid}>
      {/* End hero unit */}
      <Grid container spacing={2}>
        {cards.map((card) => (
          <Grid item key={card} xs={12} sm={12} md={6}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image="https://source.unsplash.com/random"
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  Heading
                </Typography>
                <Typography>
                  This is a media card. You can use this section to describe the content.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  View
                </Button>
                <Button size="small" color="primary">
                  Edit
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>

    // <Grid item md={11} style={{ margin: '0 auto' }}>
    //   <CardActionArea component='a' href='#'>
    //     <Card className={classes.card}>
    //       <CardMedia className={classes.cardMedia}>
    //         <Carousel autoPlay={false} timeout={200}>
    //           {items.map((item, i) => (
    //             <img
    //               style={{ borderRadius: 5 }}
    //               width={350}
    //               src='https://avatars.mds.yandex.net/get-autoru-vos/1711983/4c3361bade11d7b9fbd81257ab3f19e3/1200x900n'
    //             />
    //           ))}
    //         </Carousel>
    //       </CardMedia>
    //       <div className={classes.cardDetails}>
    //         <CardContent>
    //           <Typography>
    //             Hyundai Sonata IV (EF) Рестайлинг
    //           </Typography>
    //           <Typography variant='subtitle1' color='textSecondary'>
    //             460000 руб
    //           </Typography>
    //           <Typography variant='subtitle1' paragraph>
    //             description
    //           </Typography>
    //         </CardContent>
    //       </div>
    //     </Card>
    //   </CardActionArea>
    // </Grid>
  );
};

export default UserAdCard;
