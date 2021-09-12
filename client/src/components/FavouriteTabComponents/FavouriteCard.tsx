import {Button, Card, Grid, Tooltip} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import React from 'react';
import { useFavouriteTabStyles } from '../../styles/muiStyles';
import FavouriteAd from '../../interfaces/FavouriteAd';
import NumberFormat from 'react-number-format';
import { Status } from '../../const/AdStatus';
import { Alert, AlertTitle } from '@material-ui/lab';
import { NoImageUrl } from '../../const/noImageUrl';
import { useHistory } from 'react-router-dom';
import {useDispatch} from "react-redux";
import {deleteAdFromFavourite, insertAdToCompare, insertAdToFavourite} from "../../redux/slices/adSlice";

interface CardProps {
  favouriteAd: FavouriteAd;
}

const FavouriteCard = (props: CardProps) => {
  const classes = useFavouriteTabStyles();
  const { favouriteAd } = props;
  const history = useHistory();
  const dispatch = useDispatch();
  const handleAdClick = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    history.push(`ad/${favouriteAd.ad.id}`);
  };

  const handleDeleteFromFavouriteButtonClick = (e: any) => {
    e.stopPropagation();
    dispatch(deleteAdFromFavourite(favouriteAd.id))
  }

  return (
    <Card className={classes.card}>
      <div onClick={handleAdClick}>
        <Grid container spacing={2}>
          <Grid md={3} item className={classes.imgGrid}>
            {favouriteAd.ad.adImages.length ? (
              <img className={classes.cardImg} src={favouriteAd.ad.adImages[0].imageName} />
            ) : (
              <img className={classes.cardImg} src={NoImageUrl} height={100} />
            )}
          </Grid>
          <Grid item md={4} className={classes.cardInfo} alignItems="center">
            <h2>
              {favouriteAd.ad.modification.model.brand.name} {favouriteAd.ad.modification.model.name} {favouriteAd.ad.modification.generation.name}
            </h2>
          </Grid>
          <Grid md container justify='flex-end' item>
            <Grid item style={{ marginRight: '20px' }}>
              {favouriteAd.ad.status == Status.Sell ? (
                <h2>
                  <Alert severity='error'>
                    <AlertTitle>Авто продано</AlertTitle>
                  </Alert>
                </h2>
              ) : (
                <h2>
                  <NumberFormat value={favouriteAd.ad.price} displayType='text' thousandSeparator=' ' prefix='₽ ' />
                </h2>
              )}
            </Grid>
          </Grid>
          <Grid md container justify='flex-end' item>
            <Grid item style={{ marginRight: '20px' }}>
                  <h2>
                    <Tooltip title='Удалить из избранного'>
                      <Button onClick={handleDeleteFromFavouriteButtonClick}>
                        <FavoriteIcon />
                      </Button>
                    </Tooltip>
                  </h2>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Card>
  );
};

export default FavouriteCard;
