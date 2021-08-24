import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React, { useEffect } from 'react';
import NumberFormat from 'react-number-format';
import { useDispatch, useSelector } from 'react-redux';
import AdCard from '../../components/AdPageComponents/AdCardComponent';
import SkeletonAdCard from "../../components/AdPageComponents/SkeletonAdCardComponent";
import { Ad } from '../../interfaces/Ad';
import { useParams, useHistory } from 'react-router-dom';
import { catalogLink } from "../../Links";
import { fetchAd, fetchAds, selectAdState } from '../../redux/slices/adSlice';
import { useAdPageStyles } from '../../styles/muiStyles';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import CompareIcon from '@material-ui/icons/Compare';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

interface ParamTypes {
  adId: string;
}

const AdPage = () => {
  const classes = useAdPageStyles();
  const dispatch = useDispatch();
  const { adId } = useParams<ParamTypes>();
  const history = useHistory()
  useEffect(() => {
    dispatch(fetchAd(adId));
  }, []);
  const { adLoading, ad } = useSelector(selectAdState);
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>{adLoading ? <SkeletonAdCard /> : ad ? <AdCard ad={ad} /> : null}</Paper>
    </div>
  );
};

export default AdPage;
