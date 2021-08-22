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
import React from "react";
import { useCatalogPageStyles, useMainPageStyles } from "../../styles/muiStyles";
import { Row, Col } from 'react-flexbox-grid';
import {theme} from "../../styles/theme";
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Carousel from "react-material-ui-carousel";
import {getFullImageUrl} from "../../utils/HelperFunc";
import NumberFormat from "react-number-format";
import CatalogAdCard from "../../components/CatalogAdCard";

const images = [1,2,3]
const CatalogAdsPage = () => {

  const classes = useCatalogPageStyles();
  const gap = { xs: 1, sm: 1.5, lg: 2 }
  return (
    <div className={classes.root}>
      <Paper className={classes.headerPaper}>
        <h1>Найти объявление</h1>
      </Paper>
      <Paper className={classes.paper}>
          <CatalogAdCard loading={true} />
          <CatalogAdCard />
      </Paper>
    </div>
  )
}

export default CatalogAdsPage;