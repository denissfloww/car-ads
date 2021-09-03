import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-material-ui-carousel';
import NumberFormat from 'react-number-format';
import { Link as RouterLink, Redirect, useHistory } from 'react-router-dom';
import { NoImageUrl } from '../../const/noImageUrl';
import { AdImage } from '../../interfaces/AdImage';
import { homeLink } from '../../Links';
import { usePersonalAccountStyles } from '../../styles/muiStyles';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteAd, fetchUserAds } from '../../redux/slices/adSlice';
import LocalStorageService from '../../services/LocalStorageService';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import DeleteConfirmDialog from './DeleteConfirmDialog';
import {AdStatus} from "../../const/AdStatus";

interface IProps {
  id: string;
  brand: string;
  model: string;
  images: AdImage[];
  countOwners: number;
  price: number;
  description: string;
  status: string;
}

const UserAdCard = (props: IProps) => {
  const { brand, model, images, countOwners, price, description, id, status } = props;
  const classes = usePersonalAccountStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [openDeleteDialog, setOpenDeleteDialog] = React.useState(false);

  const handleClickOpenDeleteDialog = () => {
    setOpenDeleteDialog(true);
  };

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
  };

  const handleAdClick = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    history.push(`ad/${id}`);
  };
  const handleDelete = () => {
    dispatch(deleteAd(id));
  };

  return (
    <>
      <Grid item xs={12} sm={12} md={6}>
        <Card>
          <div className={classes.card} onClick={handleAdClick}>
            <CardMedia>
              {images.length ? (
                <Carousel autoPlay={false} timeout={200}>
                  {images.map((item, i) => (
                    <img
                      style={{ borderRadius: 5 }}
                      onError={(event: any) => (event.target.src = NoImageUrl)}
                      width='100%'
                      src={item.imageName}
                    />
                  ))}
                </Carousel>
              ) : (
                <img style={{ borderRadius: 5 }} width='100%' src={NoImageUrl} />
              )}
            </CardMedia>
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant='h6' component='h3'>
                {brand} {model}
              </Typography>
              <Typography variant='h5' component='h2'>
                <NumberFormat value={price} displayType='text' thousandSeparator=' ' prefix='₽ ' />
              </Typography>
              <Typography color='textSecondary' style={{ marginTop: '10px', fontSize: '11pt', color: `${AdStatus[status].color}`}}>
                {AdStatus[status].description}
              </Typography>
              <Typography color='textSecondary'>
                <b>Описание:</b> {description}
              </Typography>
              <Typography color='textSecondary'>
                <b>Колличество владельцев:</b> {countOwners}
              </Typography>
            </CardContent>
          </div>
          <CardActions className={classes.cardAction}>
            <Button onClick={handleClickOpenDeleteDialog} color='secondary'>
              Удалить
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <DeleteConfirmDialog handleClose={handleCloseDeleteDialog} open={openDeleteDialog} handleDelete={handleDelete} />
    </>
  );
};

export default UserAdCard;
