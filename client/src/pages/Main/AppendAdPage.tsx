import {createStyles, Paper, TextField, Theme} from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeBrand, changeModel, changeYear, selectAppendState } from '../../redux/slices/appendSlice';
import { useAppendPageStyles } from '../../styles/muiStyles';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import { Autocomplete } from '@material-ui/lab';
import { ImageListType } from 'react-images-uploading';
import ImageUploader from '../../components/ImageUploader';
import { DropzoneArea } from 'material-ui-dropzone';
import MaskedInput from 'react-text-mask';
import {makeStyles} from "@material-ui/core/styles";
import NumberFormat from 'react-number-format';
import { ColorPalette } from 'material-ui-color';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';


interface NumberFormatCustomProps {
  inputRef: (instance: NumberFormat | null) => void;
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

function NumberFormatCustom(props: NumberFormatCustomProps) {
  const { inputRef, onChange, ...other } = props;

  return (
      <NumberFormat
          {...other}
          getInputRef={inputRef}
          onValueChange={(values: any) => {
            onChange({
              target: {
                name: props.name,
                value: values.value,
              },
            });
          }}
          thousandSeparator
          isNumericString
      />
  );
}

interface State {
  textmask: string;
  numberformat: string;
}

const AppendAdPage = () => {
  const dispatch = useDispatch();
  const classes = useAppendPageStyles();
  const { showModels, showYear, showBody, brandValue, modelValue, yearValue, bodyValue, showEngine } = useSelector(selectAppendState);
  const [images, setImages] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedBody, setSelectedBody] = useState(null);
  const maxNumber = 40;

  const handleBrandChange = (_: any, value: any) => {
    dispatch(changeBrand(value));
  };

  const handleModelChange = (_: any, value: any) => {
    dispatch(changeModel(value));
  };

  const handleYearChange = (_: any, value: any) => {
    dispatch(changeYear(value));
  };

  const handleBodyChange = (_: any, value: any) => {
    const a = 1;
  };

  const [values, setValues] = React.useState<State>({
    textmask: '(1  )    -    ',
    numberformat: '1320',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <div className={classes.root}>
        <Paper className={classes.headerPaper}>
          <DirectionsCarIcon fontSize='large' style={{ fontSize: '4.5em', marginRight: '0.2em' }} />
          <h1>Продайте свой автомобиль</h1>
        </Paper>
        <Paper className={classes.paper}>
          <div style={{ width: '50%' }}>
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
                  value={modelValue}
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
                  value={yearValue}
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
                  value={bodyValue}
                  onChange={handleBodyChange}
                  renderInput={params => <TextField {...params} label='Тип кузова' variant='outlined' />}
                />
              </p>
            ) : null}
            {showEngine ? (
                <p>
                  <h3>Выберите тип двигателя</h3>
                  <Autocomplete
                      id='body'
                      options={testEngine}
                      value={testEngine.length == 1? testEngine[0] : null}
                      getOptionLabel={option => option.name}
                      getOptionSelected={(option, value) => option.name === value.name}
                      onChange={handleBodyChange}
                      renderInput={params => <TextField {...params} label='Тип двигателя' variant='outlined' />}
                  />
                </p>
            ) : null}
          </div>
        </Paper>
        <Paper className={classes.paper}>
          <div style={{ width: '100%' }}>
            <h2>Добавьте фото</h2>
            <DropzoneArea
                filesLimit={maxNumber}
                dropzoneText='Нажмите или перетащите фото'
                acceptedFiles={['image/*']}
                onChange={(files: any) => console.log('Files:', files)}
            />
          </div>
        </Paper>
        <Paper className={classes.paper}>
          <div style={{ width: '50%' }}>
            <h2>Дополнительная информация</h2>
            <p>
              <h3>Пробег</h3>
              <TextField
                  label="Км"
                  value={values.numberformat}
                  onChange={handleChange}
                  name="numberformat"
                  id="formatted-numberformat-input"
                  InputProps={{
                    inputComponent: NumberFormatCustom as any,
                  }}
              />
            </p>
            <p>
              <h3>
                Цвет
              </h3>
              <ColorPalette palette={palette} onSelect={(color) => { console.log(palette[color])}} />
            </p>
            <p>
              <h3>
                Комментарий
              </h3>
              <TextareaAutosize aria-label="minimum height" placeholder="Добавьте описание" />
            </p>
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

const testEngine = [{ name: 'Бензиновый' }, { name: 'Дизельный' }];

const palette = {
  red: '#ff0000',
  blue: '#0000ff',
  green: '#00ff00',
  yellow: 'yellow',
  cyan: 'cyan',
  lime: 'lime',
  gray: 'gray',
  orange: 'orange',
  purple: 'purple',
  black: 'black',
  white: 'white',
  pink: 'pink',
  darkblue: 'darkblue',
};

export default AppendAdPage;
