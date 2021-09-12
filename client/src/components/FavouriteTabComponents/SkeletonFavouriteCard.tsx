import { useDispatch, useSelector } from 'react-redux';
import { selectAuthState } from '../../redux/slices/authSlice';
import LocalStorageService from '../../services/LocalStorageService';
import React, { useEffect } from 'react';
import { fetchFavouriteAds, selectAdState } from '../../redux/slices/adSlice';
import {Button, Card, Grid} from '@material-ui/core';
import FavouriteAd from '../../interfaces/FavouriteAd';
import FavouriteCard from './FavouriteCard';
import { catalogLink } from '../../Links';
import { Link as RouterLink } from 'react-router-dom';
import {useFavouriteTabStyles} from "../../styles/muiStyles";
import {NoImageUrl} from "../../const/noImageUrl";
import FavoriteIcon from "@material-ui/icons/Favorite";
import {Status} from "../../const/AdStatus";
import {Alert, AlertTitle, Skeleton} from "@material-ui/lab";
import NumberFormat from "react-number-format";

const SkeletonFavouriteCard = () => {
    const classes = useFavouriteTabStyles();

    return (
        <Card>
            <Grid container spacing={2}>
                <Grid md={5} item className={classes.imgGrid}>
                    <Skeleton animation='wave' variant='rect' className={classes.cardImg} height={200} />
                </Grid>
                <Grid item md={4} className={classes.cardInfo}>
                    <h2>
                        <Skeleton animation='wave' />
                    </h2>
                </Grid>
                <Grid md container justify='flex-end' item>
                    <Grid item style={{ marginRight: '20px' }}>
                            <h2>
                                <Skeleton animation='wave' width={100} />
                            </h2>
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    );
};

export default SkeletonFavouriteCard;
