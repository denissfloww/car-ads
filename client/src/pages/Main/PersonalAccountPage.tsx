import React from 'react';
import { useMainPageStyles } from '../../styles/muiStyles';
import { Paper } from '@material-ui/core';

const PersonalAccountPage = () => {
  const classes = useMainPageStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.notFoundPaper}>
        <h1>dfgdfgdfg</h1>
      </Paper>
    </div>
  );
};

export default PersonalAccountPage;
