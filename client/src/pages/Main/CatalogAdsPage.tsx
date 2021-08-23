import {
  Paper,
  Box,
  CardActionArea,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Hidden,
  IconButton, ButtonBase,Grid
} from "@material-ui/core";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SkeletonCatalogAdCard from "../../components/CatalogPageComponent/SkeletonCatalogAdCard";
import { Ad } from "../../interfaces/Ad";
import { fetchAds, fetchUserAds, selectAdState } from "../../redux/slices/adSlice";
import { useCatalogPageStyles, useMainPageStyles } from "../../styles/muiStyles";
import { Row, Col } from 'react-flexbox-grid';
import {theme} from "../../styles/theme";
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Carousel from "react-material-ui-carousel";
import {getFullImageUrl} from "../../utils/HelperFunc";
import NumberFormat from "react-number-format";
import CatalogAdCard from "../../components/CatalogPageComponent/CatalogAdCard";

const CatalogAdsPage = () => {
  const dispatch = useDispatch()
  const classes = useCatalogPageStyles();

  useEffect(() => {
    dispatch(fetchAds())
  }, [])
  const { adsLoading, ads } = useSelector(selectAdState)
  const loading = false;
  return (
    <div className={classes.root}>
      <Paper className={classes.headerPaper}>
        <h1>Найти объявление</h1>
      </Paper>
      <Paper className={classes.paper}>
        {adsLoading? (
          Array(10).fill(0).map((item, i) => (
              <SkeletonCatalogAdCard />
            )
          )
        ) : (
          ads.map((item: Ad) => (
            <CatalogAdCard ad={item} />
          ))
        )}
      </Paper>
    </div>
  )
}

export default CatalogAdsPage;