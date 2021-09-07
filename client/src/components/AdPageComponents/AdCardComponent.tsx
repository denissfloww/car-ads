import { Button, Grid, IconButton, Table, TableBody, TableCell, TableContainer, TableRow, Tooltip } from '@material-ui/core';
import CompareIcon from '@material-ui/icons/Compare';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import React, { useEffect, useState } from 'react';
import ImageGallery from 'react-image-gallery';
import NumberFormat from 'react-number-format';
import { Link as RouterLink } from "react-router-dom";
import { NoImageUrl } from '../../const/noImageUrl';
import { Ad } from '../../interfaces/Ad';
import { useDispatch, useSelector } from 'react-redux';
import { homeLink } from "../../Links";
import { selectAuthState } from '../../redux/slices/authSlice';
import LocalStorageService from '../../services/LocalStorageService';
import {
  checkCompareAd,
  checkFavouriteAd,
  fetchAd,
  insertAdToCompare,
  insertAdToFavourite,
  selectAdState
} from '../../redux/slices/adSlice';
import {changeYear} from "../../redux/slices/appendSlice";
import {Alert, AlertTitle} from "@material-ui/lab";
import {AdStatus, Status} from "../../const/AdStatus";

interface AdCardProps {
  ad: Ad;
}

const AdCard = (props: AdCardProps) => {
  const { ad } = props;
  const images: any[] = [];
  const dispatch = useDispatch();
  const { user } = useSelector(selectAuthState);
  const isAuth = user || LocalStorageService.getUser();
  useEffect(() => {
    if (isAuth) {
      dispatch(checkCompareAd(ad.id, LocalStorageService.getUser().id));
      dispatch(checkFavouriteAd(ad.id, LocalStorageService.getUser().id))
    }
  }, []);


  const handleCompareButtonClick = (e: any) => {
    dispatch(insertAdToCompare(ad.id));
  };
  const handleFavouriteButtonClick = (e: any) => {
    dispatch(insertAdToFavourite(ad.id));
  };
  const { isAdAlreadyComparing, isAdAlreadyFavourite } = useSelector(selectAdState);
  ad.adImages.map((value, index) => {
    images.push({ original: value.imageName, thumbnail: value.imageName });
  });
  return (
    <Grid container spacing={3}>
      <Grid item container md={8}>
        <Grid md item>
          <h1 style={{ margin: 0 }}>
            {ad.modification.model.brand.name} {ad.modification.model.name} {ad.modification.generation.name}{' '}
          </h1>
          <div style={{ margin: '10px 0px 10px 0px' }}>
            {isAuth ? (
              isAdAlreadyComparing ? (
                <Tooltip title='Уже в вашем сравнении'>
                  <Button >
                    <CompareIcon color='disabled' />
                  </Button>
                </Tooltip>
              ) : (
                <Tooltip title='Добавить в сравнение'>
                  <Button onClick={handleCompareButtonClick}>
                    <CompareIcon />
                  </Button>
                </Tooltip>
              )
            ) : null}
            {isAuth ? (
                isAdAlreadyFavourite ? (
                    <Tooltip title='Уже в избранном'>
                      <Button >
                        <FavoriteBorderIcon color='disabled' />
                      </Button>
                    </Tooltip>
                ) : (
                    <Tooltip title='Добавить в избранное'>
                      <Button onClick={handleFavouriteButtonClick}>
                        <FavoriteBorderIcon />
                      </Button>
                    </Tooltip>
                )
            ) : null}
          </div>
          {ad.adImages.length ? <ImageGallery items={images} /> : <img src={NoImageUrl} alt='' />}
          <h1>Описание</h1>
          <div style={{ textAlign: 'justify', lineHeight: 2.0 }}>
            {ad.description}
          </div>
        </Grid>
      </Grid>
      <Grid md item>
        {ad.status == Status.Sell ? (
            <h1 style={{ margin: 0, textAlign: 'center' }}>
              <Alert severity='error'>
                <AlertTitle>Авто продано</AlertTitle>
              </Alert>
            </h1>
        ) : (
            <h1 style={{ margin: 0, textAlign: 'right' }}>
              <NumberFormat value={ad.price} displayType='text' thousandSeparator=' ' prefix='₽ ' />
            </h1>
        )}
        <TableContainer style={{ marginTop: '20%' }}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell align='left'>Объем двигателя</TableCell>
                <TableCell align='center'>{ad.modification.engineCapacity} л</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='left'>Двигатель</TableCell>
                <TableCell align='center'>{ad.modification.engineType.name}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='left'>Пробег</TableCell>
                <TableCell align='center'>
                  {' '}
                  <NumberFormat value={ad.mileage} displayType='text' thousandSeparator=' ' /> км
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='left'>Коробка передач</TableCell>
                <TableCell align='center'>{ad.modification.gearbox.name}</TableCell>
              </TableRow>{' '}
              <TableRow>
                <TableCell align='left'>Год выпуска</TableCell>
                <TableCell align='center'>{ad.yearRelease}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='left'>Мощность</TableCell>
                <TableCell align='center'>{ad.modification.hp} л.с</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default AdCard;
