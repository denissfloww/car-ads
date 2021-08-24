import { Button, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Tooltip } from '@material-ui/core';
import CompareIcon from '@material-ui/icons/Compare';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import NumberFormat from 'react-number-format';
import { NoImageUrl } from '../../const/noImageUrl';
import { Ad } from '../../interfaces/Ad';
import { getFullImageUrl } from '../../utils/HelperFunc';

interface AdCardProps {
  ad: Ad;
}

const AdCard = (props: AdCardProps) => {
  const { ad } = props;
  const images: any[] = [];

  ad.adImages.map((value, index) => {
    images.push({ original: getFullImageUrl(value.imageName), thumbnail: getFullImageUrl(value.imageName) });
  });
  return (
    <Grid container spacing={3}>
      <Grid item container md={8}>
        <Grid md item>
          <h1 style={{ margin: 0 }}>
            {ad.modification.model.brand.name} {ad.modification.model.name}{' '}
          </h1>
          <div style={{ margin: '10px 0px 10px 0px' }}>
            <Tooltip title='Добавить в сравнение'>
              <Button>
                <CompareIcon />
              </Button>
            </Tooltip>
            <Tooltip title='Добавить в избранное'>
              <Button>
                <FavoriteBorderIcon />
              </Button>
            </Tooltip>
          </div>
          {ad.adImages.length ? <ImageGallery items={images} /> : <img src={NoImageUrl} alt='' />}
          <h1>Описание</h1>
          <div style={{ textAlign: 'justify', lineHeight: 2.0 }}>
            {ad.description} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis deleniti deserunt dicta ducimus, illo
            illum ipsa minima molestiae qui voluptatum. Alias exercitationem iure natus provident quidem quisquam ullam voluptates!
            Laboriosam.
          </div>
        </Grid>
      </Grid>
      <Grid md item>
        <h1 style={{ margin: 0, textAlign: 'right' }}>
          <NumberFormat value={ad.price} displayType='text' thousandSeparator=' ' prefix='₽ ' />
        </h1>
        <TableContainer style={{ marginTop: '20%' }}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell align='left'>Объем двигателя</TableCell>
                <TableCell align='center'>{ad.modification.engineCapacity} л</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='left'>Двигатель</TableCell>
                <TableCell align='center'>!!!!!!!!!</TableCell>
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
                <TableCell align='center'>{ad.modification.yearRelease}</TableCell>
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
