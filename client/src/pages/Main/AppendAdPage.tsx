import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  createStyles,
  FormControlLabel,
  Grid,
  GridList,
  GridListTile,
  GridListTileBar,
  Paper,
  RadioGroup,
  TextField,
  Theme,
  Typography
} from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeBody,
  changeBrand, changeDrive, changeEngine, changeGearBox, changeGeneration, changeImages,
  changeModel, changeModification,
  changeYear,
  fetchBrands,
  selectAppendState
} from '../../redux/slices/appendSlice';
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
import MilageFormatCustom from '../../components/MilageTextMask';
import ContactNumberMask from "../../components/ContactNumberMask";
import { Radio } from '@material-ui/core';
import PriceFormatCustom from '../../components/PriceFormatMask';
import PublishIcon from '@material-ui/icons/Publish';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {setAuthError, signup} from "../../redux/slices/authSlice";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import '../../styles/AppendPageStyle.css'

const validationSchema = yup.object({
  mileage: yup.string().required('Заполните это поле!'),
  vin: yup.string().required('Заполните это поле!'),
  price: yup.string().required('Заполните это поле!'),
  phone: yup.string().required('Заполните это поле!').matches(/^7\([1-9]+\)\s\d+-\d{4}$/, 'Введите корректный формат телефона'),
  brand: yup.string().required()
});

const AppendAdPage = () => {
  const dispatch = useDispatch();
  const classes = useAppendPageStyles();

  const {
    showModels,
    showYear,
    showBody,
    brandValue,
    modelValue,
    yearValue,
    bodyValue,
    showEngine,
    showGeneration,
    brands,
    showDrive,
    showGearBox,
    models,
    showModification,
    modificationValue,
    engineValue,
    driveValue,
    gearboxValue,
    images
  }: any = useSelector(selectAppendState);

  const [imagesTest, setImagesTest] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedBody, setSelectedBody] = useState(null);
  const maxNumber = 40;
  useEffect(() => {dispatch(fetchBrands())}, [1]);

  const handleBrandChange = (e: any, value: any) => {
    dispatch(changeBrand(value));
  };

  const handleModelChange = (_: any, value: any) => {
    dispatch(changeModel(value));
  };

  const handleYearChange = (_: any, value: any) => {
    dispatch(changeYear(value));
  };

  const handleBodyChange = (_: any, value: any) => {
    dispatch(changeBody(value))
  };

  const handleEngineChange = (_: any, value: any) => {
    dispatch(changeEngine(value))
  }

  const handleGenerationChange = (_: any, value: any) => {
    dispatch(changeGeneration(value))
  }

  const handleDriveChange = (_: any, value: any) => {
    dispatch(changeDrive(value))
  }

  const handleGearboxChange = (_: any, value: any) => {
    dispatch(changeGearBox(value))
  }

  const handleModificationChange = (_: any, value: any) => {
    dispatch(changeModification(value))
  }

  const handleImagesChange = (images: any) => {
    dispatch(changeImages(images))
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log()
  };

  const { register: append, handleSubmit, errors, getValues } = useForm({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  });

  const handleAppend = ({ brand, generation } : any) => {
    console.log(brand, generation, images)
  };


  return (
    <>
      <div className={classes.root}>
        <form onSubmit={handleSubmit(handleAppend)}>
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
                style={{ marginBottom: 8 }}
                options={brands}
                getOptionLabel={option => option.name}
                value={brandValue}
                getOptionSelected={(option, value) => option.name === value.name}
                includeInputInList
                disableClearable
                onChange={handleBrandChange}
                renderInput={params =>
                    <TextField
                        {...params}
                        label='Марка'
                        fullWidth
                        inputRef={append}
                        variant='outlined'
                        name='brand'
                        error={'brand' in errors}
                        helperText={'brand' in errors ? errors.brand.message : ''}
                    />
                }
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
                  options={models ? models : null}
                  getOptionLabel={option => option.name}
                  getOptionSelected={(option, value) => option.name === value.name}
                  value={modelValue}
                  disableClearable
                  onChange={handleModelChange}
                  renderInput={params =>
                      <TextField {...params} label='Модель' variant='outlined' />
                  }
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
                  disableClearable
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
                  disableClearable
                  onChange={handleBodyChange}
                  renderInput={params => <TextField {...params} label='Тип кузова' variant='outlined' />}
                />
              </p>
            ) : null}
            {showGeneration ? (
                <p>
                  <h3>Поколение</h3>
                  <GridList>
                    {testGeneration.map((item) => (
                        <div>
                          <input
                              type="radio" name="generation"
                              onChange={(e) => {handleGenerationChange(e, e.target.value)}}
                              value={item.name}
                              id={item.name} className="input-hidden" />
                          <label htmlFor={item.name}>
                            <GridListTile className='generation-image-div'>
                              <img src={item.img}/>
                              <GridListTileBar
                                  title={item.name}
                                  subtitle={item.yearRelease}
                              />
                            </GridListTile>
                          </label>
                        </div>
                    ))}
                  </GridList>
                </p>
            ) : null}
            {showEngine  ? (
                <p>
                  <h3>Выберите тип двигателя</h3>
                  <Autocomplete
                      id='body'
                      options={testEngine}
                      getOptionLabel={option => option.name}
                      getOptionSelected={(option, value) => option.name === value.name}
                      disableClearable
                      value={engineValue}
                      onChange={handleEngineChange}
                      renderInput={
                        params => <TextField {...params} label='Тип двигателя' variant='outlined' />
                      }
                  />
                </p>
            ) : null}
            {showDrive ? (
                <p>
                  <h3>Выберите привод</h3>
                  <Autocomplete
                      id='body'
                      options={testDrive}
                      value={driveValue}
                      getOptionLabel={option => option.name}
                      getOptionSelected={(option, value) => option.name === value.name}
                      onChange={handleDriveChange}
                      renderInput={
                        params => <TextField {...params} label='Тип' variant='outlined' />
                      }
                  />
                </p>
            ) : null}
            {showGearBox ? (
                <p>
                  <h3>Выберите коробку передач</h3>
                  <Autocomplete
                      id='body'
                      options={testTransmission}
                      disableClearable
                      value={gearboxValue}
                      getOptionLabel={option => option.name}
                      getOptionSelected={(option, value) => option.name === value.name}
                      onChange={handleGearboxChange}
                      renderInput={params => <TextField {...params} label='Тип' variant='outlined' />}
                  />
                </p>
            ) : null}
            {showModification ? (
                <p>
                  <h3>Модификация</h3>
                  <RadioGroup aria-label="gender" name="gender1" value={modificationValue} onChange={handleModificationChange}>
                    {testModification.map((modification) => (
                        <FormControlLabel value={modification.hp} control={<Radio required color="primary" />} label={`${modification.hp} л.с | ${modification.engineCapacity} л.`} />
                    ))}
                  </RadioGroup>
                </p>


            ) : null}
            <p>
              <h3>VIN-номер</h3>
              <TextField
                  required
                  fullWidth
                  inputRef={append}
                  style={{width:'100%'}}
                  label="vin"
                  name="vin"
                  onChange={handleChange}
                  variant="outlined"
                  value='test'
                  id="formatted-numberformat-input"
                  error={'vin' in errors}
                  helperText={'vin' in errors ? errors.vin.message : ''}
              />
            </p>
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
                  required
                  fullWidth
                  inputRef={append}
                  label="Км"
                  value='4234'
                  onChange={handleChange}
                  type='text'
                  variant="outlined"
                  name="mileage"
                  id="formatted-numberformat-input"
                  error={'mileage' in errors}
                  helperText={'mileage' in errors ? errors.mileage.message : ''}
                  InputProps={{
                    inputComponent: MilageFormatCustom as any,
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
              <TextField
                  variant="outlined"
                  style={{width:"100%"}}
                  placeholder="Добавьте описание"
                  multiline
                  rows={2}
                  rowsMax={Infinity}
              />
            </p>
            <p>
              <h3>
                Контактный телефон
              </h3>
              <TextField
                  required
                  fullWidth
                  inputRef={append}
                  value='9999999999'
                  label="Телефон"
                  onChange={handleChange}
                  variant="outlined"
                  name="phone"
                  id="formatted-numberformat-input"
                  error={'phone' in errors}
                  helperText={'phone' in errors ? errors.phone.message : ''}
                  InputProps={{
                    inputComponent: ContactNumberMask as any,
                  }}
              />
            </p>
            <p>
              <h3>
                Колличество владельцев
              </h3>
              <RadioGroup aria-label="gender" name="gender1">
                <FormControlLabel value="female" control={<Radio required color="primary" />} label="1" />
                <FormControlLabel value="male" control={<Radio required color="primary" />} label="2" />
                <FormControlLabel value="other" control={<Radio required color="primary" />} label="3" />
                <FormControlLabel value="disabled" control={<Radio required color="primary" />} label="4+" />
              </RadioGroup>
            </p>
            <p>
              <h3>
                Цена
              </h3>
              <TextField
                  required
                  fullWidth
                  inputRef={append}
                  value='200000'
                  label="В рублях"
                  onChange={handleChange}
                  variant="outlined"
                  name="price"
                  id="formatted-numberformat-input"
                  error={'price' in errors}
                  helperText={'price' in errors ? errors.price.message : ''}
                  InputProps={{
                    inputComponent: PriceFormatCustom as any,
                  }}
              />
            </p>
            <p>
              <Button variant="contained" color="primary" type='submit' startIcon={<PublishIcon />}>
                Подать объявление
              </Button>
            </p>
          </div>
        </Paper>
        </form>
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

const testTransmission = [{name: 'Автомат'}, { name: 'Механическая'}]

const testDrive = [{name: 'Передний'},{ name: 'Задний'}]
const testGeneration = [
    {name: 'I', yearRelease:'2021-2018', img:'https://avatars.mds.yandex.net/get-verba/937147/2a0000016ffbbb0f0140d930c0448202630f/minicard'},
    {name: 'II', yearRelease:'2023-2030', img:'https://avatars.mds.yandex.net/get-verba/937147/2a0000016ffbbb0f0140d930c0448202630f/minicard'},
  {name: 'III', yearRelease:'2040-2030', img:'https://avatars.mds.yandex.net/get-verba/937147/2a0000016ffbbb0f0140d930c0448202630f/minicard'}
]

const testModification = [
  {hp:'43', engineCapacity: '2.0'},
  {hp:'30', engineCapacity: '1.0'}
]

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
