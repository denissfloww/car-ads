import { Card, Container, Grid } from '@material-ui/core';
import SkeletonCatalogAdCard from '../CatalogPageComponent/SkeletonCatalogAdCard';
import React from 'react';
import { Skeleton } from '@material-ui/lab';
import { useFavouriteTabStyles } from '../../styles/muiStyles';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavouriteCatalog from './FavouriteCatalog';

const FavouriteTab = () => {

  return (
    <Container maxWidth='md'>
      <FavouriteCatalog />
    </Container>
  );
};

export default FavouriteTab;
