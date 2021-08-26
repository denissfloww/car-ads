import {
  Paper,
  Box,
  CardActionArea,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Hidden,
  IconButton,
  ButtonBase,
  Grid,
  Button,
} from '@material-ui/core';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import { Link, Link as RouterLink } from "react-router-dom";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SkeletonCatalogAdCard from '../../components/CatalogPageComponent/SkeletonCatalogAdCard';
import { Ad } from '../../interfaces/Ad';
import { fetchAds, fetchUserAds, selectAdState } from '../../redux/slices/adSlice';
import { useCatalogPageStyles, useMainPageStyles } from '../../styles/muiStyles';
import { Row, Col } from 'react-flexbox-grid';
import { theme } from '../../styles/theme';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Carousel from 'react-material-ui-carousel';
import { getFullImageUrl } from '../../utils/HelperFunc';
import NumberFormat from 'react-number-format';
import SearchIcon from '@material-ui/icons/Search';
import CatalogAdCard from '../../components/CatalogPageComponent/CatalogAdCard';
import {Pagination} from "@material-ui/lab";

const CatalogAdsPage = () => {
  const dispatch = useDispatch();
  const classes = useCatalogPageStyles();


  useEffect(() => {
    dispatch(fetchAds(1, 5));
  }, []);

  const handlePaginationClick = (e: any, value: any) =>{
    dispatch(fetchAds(value, 5));
  }

  const { adsLoading, ads, countPage } = useSelector(selectAdState);
  return (

    <div className={classes.root}>
      <Paper className={classes.headerPaper}>
        <h1>
          Найти объявление
        </h1>
      </Paper>
      <Grid md container direction="column" item>
      <Paper className={classes.paper}>
        {adsLoading
          ? Array(10)
              .fill(0)
              .map((item, i) => <SkeletonCatalogAdCard />)
          : ads.map((item: Ad) => (
            <Link style={{ textDecoration: 'none' }} to={`ad/${item.id}`}>
                <CatalogAdCard ad={item} />
            </Link>
            ))}

          <Grid container md justify="center" style={{marginTop: 'calc(30% + 60px)', bottom: 0,}}>
            <Pagination count={countPage} shape="rounded" onChange={handlePaginationClick} />
          </Grid>
      </Paper>
      </Grid>
    </div>

  );
};

export default CatalogAdsPage;
