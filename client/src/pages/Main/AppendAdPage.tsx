import { Button, Paper, TextField, Typography } from '@material-ui/core';
import { Image } from '@material-ui/icons';
import { on } from 'cluster';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeBrand, changeModel, changeYear, selectAppendState } from '../../redux/slices/appendSlice';
import { useAppendPageStyles } from '../../styles/muiStyles';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import { Autocomplete } from '@material-ui/lab';
import ImageUploading, { ImageListType } from 'react-images-uploading';
import CancelIcon from '@material-ui/icons/Cancel';
import PublishIcon from '@material-ui/icons/Publish';
import AutoComplete from '../../components/AutoCompletes/AutoComplete';
import ImageUploader from '../../components/ImageUploader';

const AppendAdPage = () => {
  const dispatch = useDispatch();
  const classes = useAppendPageStyles();
  const { showModels, showYear, showBody, brandValue } = useSelector(selectAppendState);
  const [images, setImages] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedBody, setSelectedBody] = useState(null);
  const maxNumber = 40;

  const handleBrandChange = (_: any, value: any) => {
    dispatch(changeBrand(value));
    setSelectedBrand(value);
    if ((selectedModel as any)?.name !== value?.name) {
      setSelectedModel(null);
      setSelectedYear(null);
      setSelectedBody(null);
    }
  };

  const handleModelChange = (_: any, value: any) => {
    dispatch(changeModel());
    setSelectedModel(value);
    if ((selectedYear as any)?.name !== value?.name) {
      setSelectedYear(null);
      setSelectedBody(null);
    }
  };

  const handleYearChange = (_: any, value: any) => {
    setSelectedYear(value);
    dispatch(changeYear());
    if ((selectedBody as any)?.name !== value?.name) {
      setSelectedBody(null);
    }
  };

  const handleBodyChange = (_: any, value: any) => {
    const a = 1;
  };

  const onImageUploaderChange = (imageList: ImageListType, addUpdateIndex: number[] | undefined) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList as never[]);
  };

  return (
    <>
      <div className={classes.root}>
        <Paper className={classes.headerPaper}>
          <DirectionsCarIcon fontSize='large' style={{ fontSize: '4.5em', marginRight: '0.2em' }} />
          <h1>Продайте свой автомобиль</h1>
        </Paper>
        <Paper className={classes.paper}>
          <div style={{ width: '500px' }}>
            <h2>Основная информация</h2>
            <p style={{ display: 'inline' }}>
              <h3>Выберите марку авто</h3>
              <Autocomplete
                id='category'
                style={{ marginBottom: 8 }}
                options={testBrand}
                getOptionLabel={option => option.name}
                getOptionSelected={(option, value) => option.name === value.name}
                onChange={handleBrandChange}
                renderInput={params => <TextField {...params} label='Марка' variant='outlined' />}
                renderOption={options => {
                  return (
                    <>
                      <img style={{ width: '40px', height: '40px' }} src={options.imageUrl} alt='' />
                      {options.name}
                    </>
                  );
                }}
              />
            </p>
            {showModels ? (
              <p>
                <h3>Выберите модель</h3>
                <Autocomplete
                  id='subcategory'
                  options={testModel}
                  getOptionLabel={option => option.name}
                  getOptionSelected={(option, value) => option.name === value.name}
                  value={selectedModel}
                  onChange={handleModelChange}
                  renderInput={params => <TextField {...params} label='Модель' variant='outlined' />}
                />
              </p>
            ) : null}
            {showYear ? (
              <p>
                <h3>Выберите год выпуска авто</h3>
                <Autocomplete
                  id='year'
                  options={testYear}
                  getOptionLabel={option => option.name}
                  getOptionSelected={(option, value) => option.name === value.name}
                  value={selectedYear}
                  onChange={handleYearChange}
                  renderInput={params => <TextField {...params} label='Год выпуска' variant='outlined' />}
                />
              </p>
            ) : null}
            {showBody ? (
              <p>
                <h3>Выберите тип кузова</h3>
                <Autocomplete
                  id='body'
                  options={testBody}
                  getOptionLabel={option => option.name}
                  getOptionSelected={(option, value) => option.name === value.name}
                  value={selectedBody}
                  onChange={handleBodyChange}
                  renderInput={params => <TextField {...params} label='Тип кузова' variant='outlined' />}
                />
              </p>
            ) : null}
          </div>
        </Paper>
        <Paper className={classes.paper}>
          <div style={{ width: '500px' }}>
            <h2>Добавьте фото</h2>
            <ImageUploader maxNumber={maxNumber} onChange={onImageUploaderChange} images={images} />
          </div>
        </Paper>
      </div>
    </>
  );
};

const testBrand = [
  { name: 'Opel', imageUrl: 'https://avatars.mds.yandex.net/get-verba/937147/2a00000179b3e4e1c4c28087a58eb0595a12/logo' },
  { name: 'BMW', imageUrl: 'https://avatars.mds.yandex.net/get-verba/1030388/2a00000179af8e23344d871bcfa394f0c60d/logo' },
  { name: 'Toyota', imageUrl: 'https://avatars.mds.yandex.net/get-verba/1030388/2a00000179af8e23344d871bcfa394f0c60d/logo' },
];

const testModel = [{ name: 'Vectra' }, { name: 'Selena' }, { name: 'm3' }];

const testYear = [{ name: '2021' }, { name: '2000' }, { name: '3000' }];

const testBody = [{ name: 'Седан' }, { name: 'Кроссовер' }, { name: 'Лифтбек' }];

export default AppendAdPage;
