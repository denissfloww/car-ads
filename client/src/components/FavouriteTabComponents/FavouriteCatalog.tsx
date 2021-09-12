import FavouriteCard from "./FavouriteCard";
import {Button, Grid} from "@material-ui/core";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectAuthState} from "../../redux/slices/authSlice";
import LocalStorageService from "../../services/LocalStorageService";
import {fetchFavouriteAds, selectAdState} from "../../redux/slices/adSlice";
import {appendAdLink, catalogLink} from "../../Links";
import {Link as RouterLink} from "react-router-dom";
import {Ad} from "../../interfaces/Ad";
import FavouriteAd from "../../interfaces/FavouriteAd";
import SkeletonFavouriteCard from "./SkeletonFavouriteCard";
import SkeletonUserAdCard from "../PersonalAccountPageComponents/SkeletonUserAdCard";

const FavouriteCatalog = () =>{
    const dispatch = useDispatch();
    const { user } = useSelector(selectAuthState);
    const isAuth = user || LocalStorageService.getUser();
    const userId = LocalStorageService.getUser().id
    useEffect(() => {
        if (isAuth) {
            dispatch(fetchFavouriteAds(userId));
        }
    }, []);

    const { favouriteAds, favouriteAdsLoading } = useSelector(selectAdState);

    return (
        <Grid md container direction='column' item >
            {favouriteAdsLoading? Array(10)
                .fill(0)
                .map((item, i) => <SkeletonFavouriteCard />) : (
                favouriteAds.length? (
                    favouriteAds.map((favouriteAd: FavouriteAd) => (
                        <div style={{marginBottom:'2%'}}>
                            <FavouriteCard favouriteAd={favouriteAd} />
                        </div>
                    ))
                ) : (
                    <div>
                        <p>У вас нет избранных объявлений</p>
                        <p>
                            <Button variant='contained' color='primary' to={catalogLink} component={RouterLink}>
                                К каталогу
                            </Button>
                        </p>
                    </div>
                )
            )}
        </Grid>
    )
}

export default FavouriteCatalog