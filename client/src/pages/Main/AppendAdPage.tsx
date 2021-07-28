import { Paper, TextField, Typography } from '@material-ui/core';
import { Image } from '@material-ui/icons';
import React from 'react';
import { useAppendPageStyles } from '../../styles/muiStyles';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import { Autocomplete } from '@material-ui/lab';

const AppendAdPage = () => {
  const classes = useAppendPageStyles()

  return(
    <div className={classes.root}>
      <Paper className={classes.headerPaper}>
        <DirectionsCarIcon fontSize="large" style={{fontSize: '4.5em', marginRight: '0.2em'}} />
        <h1>Продайте свой автомобиль</h1>
      </Paper>
      <Paper className={classes.paper}>
        <div style={{width: "500px"}}>

          <p>
            <h3>Выберите марку авто</h3>
          <Autocomplete
            id="combo-box-demo"
            options={top100Films}
            getOptionLabel={(option) => option.title}
            renderInput={(params) => <TextField {...params} label="Выберите бренд" variant="outlined" />}
            renderOption={options => {
              return (
                <>
                  <img style={{width: "40px", height:"40px"}} src={options.imageUrl} alt='' />
                  {options.title}
                </>
              )
            }}
          /></p>
          <p>
            <h3>Выберите модель</h3>
          <Autocomplete
            id="combo-box-demo"
            options={top100Films}
            getOptionLabel={(option) => option.title}
            renderInput={(params) => <TextField {...params} label="Выберите марку" variant="outlined" />}
            renderOption={options => {
              return (
                <>
                  <img style={{width: "40px", height:"40px"}} src={options.imageUrl} alt='' />
                  {options.title}
                </>
              )
            }}
          /></p>

       </div>
      </Paper>
    </div>
  )
};

const top100Films = [
  { title: 'Opel', year: 1994, imageUrl: 'https://avatars.mds.yandex.net/get-verba/937147/2a00000179b3e4e1c4c28087a58eb0595a12/logo' },
  { title: 'BMW', year: 1972, imageUrl: 'https://avatars.mds.yandex.net/get-verba/1030388/2a00000179af8e23344d871bcfa394f0c60d/logo' },
];

export default AppendAdPage;