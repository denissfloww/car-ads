import { Grid, Table, TableBody, TableCell, TableContainer, TableRow } from '@material-ui/core';
import CompareIcon from '@material-ui/icons/Compare';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Skeleton } from '@material-ui/lab';
import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import NumberFormat from 'react-number-format';
import { NoImageUrl } from '../../const/noImageUrl';
import { Ad } from '../../interfaces/Ad';

const SkeletonAdCard = () => {
  return (
    <Grid container spacing={3}>
      <Grid item container md={8}>
        <Grid md item>
          <h1 style={{ margin: 0 }}>
            <Skeleton
              animation='wave'
              variant='rect'
              style={{ height: '100%', width: '100%', maxWidth: '900px', borderRadius: '1%' }}
              height={300}
            />
          </h1>
          <div style={{ margin: '10px 0px 10px 0px' }}>
            <CompareIcon /> <FavoriteBorderIcon />
          </div>
          <Skeleton animation='wave' width='80%' />
        </Grid>
      </Grid>
      <Grid md item>
        <h1 style={{ margin: 0, textAlign: 'right' }}>
          <Skeleton animation='wave' width='80%' />
        </h1>
        <TableContainer style={{ marginTop: '20%' }}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell align='left'>Объем двигателя</TableCell>
                <Skeleton animation='wave' width='80%' />
              </TableRow>
              <TableRow>
                <TableCell align='left'>Двигатель</TableCell>
                <TableCell align='center'>!!!!!!!!!</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='left'>Пробег</TableCell>
                <TableCell align='center'>
                  {' '}
                  <Skeleton animation='wave' width='80%' />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='left'>Коробка передач</TableCell>
                <TableCell align='center'><Skeleton animation='wave' width='80%' /></TableCell>
              </TableRow>{' '}
              <TableRow>
                <TableCell align='left'>Год выпуска</TableCell>
                <TableCell align='center'><Skeleton animation='wave' width='80%' /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='left'>Мощность</TableCell>
                <TableCell align='center'><Skeleton animation='wave' width='80%' /> л.с</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default SkeletonAdCard;
