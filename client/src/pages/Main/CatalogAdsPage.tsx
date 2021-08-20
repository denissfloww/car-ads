import { Paper, Box, CardActionArea, Card, CardContent, Typography, CardMedia, Hidden } from "@material-ui/core";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import React from "react";
import { useCatalogPageStyles, useMainPageStyles } from "../../styles/muiStyles";
import { Grid, Row, Col } from 'react-flexbox-grid';

const CatalogAdsPage = () => {

  const classes = useCatalogPageStyles();
  const gap = { xs: 1, sm: 1.5, lg: 2 }
  return (
    <div className={classes.root}>
      <Paper className={classes.headerPaper}>
        <h1>Найти объявление</h1>
      </Paper>
      <Paper className={classes.paper}>
        <Box display="flex" flexDirection="row" p={1} m={1} bgcolor="background.paper">
          <Box p={1} bgcolor="grey.300">
            Item 1
          </Box>
          <Box p={1} bgcolor="grey.300">
            Item 2
          </Box>
          <Box p={1} bgcolor="grey.300">
            Item 3
          </Box>
        </Box>
      </Paper>
    </div>
  )
}

export default CatalogAdsPage;