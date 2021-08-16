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
  appendAdd,
  changeBody,
  changeBrand,
  changeColor,
  changeComment, changeCountOwners,
  changeDrive,
  changeEngine,
  changeGearBox,
  changeGeneration,
  changeImages,
  changeMileage,
  changeModel,
  changeModification, changePhone, changePrice,
  changeVinNumber,
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
import {Generation} from "../../interfaces/Generation";
import {Modification} from "../../interfaces/Modification";
import { useHistory } from 'react-router-dom';
import {palette} from "../../const/palette";

const validationSchema = yup.object({
  mileage: yup.string().required('Заполните это поле!'),
  vin: yup.string().required('Заполните это поле!'),
  price: yup.string().required('Заполните это поле!'),
  phone: yup.string().required('Заполните это поле!').matches(/^7\([1-9]+\)\s\d+-\d{4}$/, 'Введите корректный формат телефона'),
  brand: yup.string().required('Вы не выбрали марку!'),
});

const AppendAdPage = () => {
  const dispatch = useDispatch();
  const classes = useAppendPageStyles();
  const history = useHistory();
  const {
    showModels,
    showYear,
    showBody,
    brandValue,
    modelValue,
    yearValue,
    bodyValue,
    showEngine,
    generationValue,
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
    years,
    bodies,
    generations,
    engines,
    drives,
    gearboxes,
    modifications,
    vinNumber,
    mileage,
    color,
    comment,
    phone,
    countOwners,
    price,
  }: any = useSelector(selectAppendState);

  const [images, setImages] = useState([]);
  const maxNumber = 10;
  useEffect(() => {
    dispatch(fetchBrands())
  }, [1]);

  const handleBrandChange = (e: any, value: any) => {
    dispatch(changeBrand(value));
  };

  const handleModelChange = (e: any, value: any) => {
    dispatch(changeModel(value));
  };

  const handleYearChange = (e: any, value: any) => {
    dispatch(changeYear(value, modelValue));
  };

  const handleBodyChange = (_: any, value: any) => {
    dispatch(changeBody(value, yearValue, modelValue))
  };

  const handleEngineChange = (_: any, value: any) => {
    dispatch(changeEngine(value, modelValue, bodyValue, generationValue))
  }

  const handleGenerationChange = (_: any, value: any) => {
    dispatch(changeGeneration(value, modelValue, bodyValue))
  }

  const handleDriveChange = (_: any, value: any) => {
    dispatch(changeDrive(value, modelValue, bodyValue, generationValue, engineValue))
  }

  const handleGearboxChange = (_: any, value: any) => {
    dispatch(changeGearBox(value, modelValue, bodyValue, generationValue, engineValue, driveValue))
  }

  const handleModificationChange = (_: any, value: any) => {
    dispatch(changeModification(value))
  }

  const handleImagesChange = (images: any) => {
    setImages(images)
  }

  const handleVinNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeVinNumber(event.target.value))
  };

  const handleMileageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeMileage(event.target.value))
  };

  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeComment(event.target.value))
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changePhone(event.target.value))
  };

  const handleCountOwnersChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeCountOwners(event.target.value))
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changePrice(event.target.value))
  };

  const { register: append, handleSubmit, errors, getValues } = useForm({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  });

  const handleAppend = () => {
    dispatch(appendAdd(history,modificationValue, vinNumber, images, mileage, color, comment, phone, countOwners, price))
  };


  return (
    <>
      <div className={classes.root}>
        <form onSubmit={handleSubmit(handleAppend)}>
        <Paper className={classes.headerPaper}>
          <DirectionsCarIcon fontSize='large' className={classes.directionCarIcon} />
          <h1>Продайте свой автомобиль</h1>
        </Paper>
        <Paper className={classes.paper}>
          <div className={classes.inputBlock}>
            <h2>Основная информация</h2>
            <p>
              <h3>Выберите марку авто</h3>
              <Autocomplete
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
                        required={true}
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
                      <img className={classes.brandImage} src={options.imageUrl} alt='' />
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
                  options={models ? models : null}
                  getOptionLabel={option => option.name}
                  getOptionSelected={(option, value) => option.name === value.name}
                  value={modelValue}
                  disableClearable
                  onChange={handleModelChange}
                  renderInput={params =>
                      <TextField {...params} required={true} label='Модель' variant='outlined' />
                  }
                />
              </p>
            ) : null}
            {showYear ? (
              <p>
                <h3>Выберите год выпуска авто</h3>
                <Autocomplete
                  options={years}
                  getOptionLabel={option => option.toString()}
                  getOptionSelected={(option, value) => option === value}
                  value={yearValue}
                  disableClearable
                  onChange={handleYearChange}
                  renderInput={params =>
                      <TextField {...params} required={true} label='Год выпуска' variant='outlined' />
                  }
                />
              </p>
            ) : null}
            {showBody ? (
              <p>
                <h3>Выберите тип кузова</h3>
                <Autocomplete
                  options={bodies}
                  getOptionLabel={option => option.name}
                  getOptionSelected={(option, value) => option.name === value.name}
                  value={bodyValue}
                  disableClearable
                  onChange={handleBodyChange}
                  renderInput={params => <TextField {...params} required={true} label='Тип кузова' variant='outlined' />}
                />
              </p>
            ) : null}
            {showGeneration ? (
                <p>
                  <h3>Поколение</h3>
                  <GridList>
                    {generations.map((item: Generation) => (
                        <div>
                          <input
                              required={true}
                              type="radio" name="generation"
                              onChange={(e) => {handleGenerationChange(e, e.target.value)}}
                              value={item.name}
                              id={item.name} className="input-hidden" />
                          <label htmlFor={item.name}>
                            <GridListTile className='generation-image-div'>
                              <img src={item.image} height={150} width={200} />
                              <GridListTileBar
                                  title={item.name}
                                  subtitle={item.name}
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
                      options={engines}
                      getOptionLabel={option => option.name}
                      getOptionSelected={(option, value) => option.name === value.name}
                      disableClearable
                      value={engineValue}
                      onChange={handleEngineChange}
                      renderInput={
                        params =>
                            <TextField {...params} required={true} label='Тип двигателя' variant='outlined' />
                      }
                  />
                </p>
            ) : null}
            {showDrive ? (
                <p>
                  <h3>Выберите привод</h3>
                  <Autocomplete
                      options={drives}
                      value={driveValue}
                      disableClearable
                      getOptionLabel={option => option.name}
                      getOptionSelected={(option, value) => option.name === value.name}
                      onChange={handleDriveChange}
                      renderInput={
                        params => <TextField {...params} required={true} label='Тип' variant='outlined' />
                      }
                  />
                </p>
            ) : null}
            {showGearBox ? (
                <p>
                  <h3>Выберите коробку передач</h3>
                  <Autocomplete
                      id='body'
                      options={gearboxes}
                      disableClearable
                      value={gearboxValue}
                      getOptionLabel={option => option.name}
                      getOptionSelected={(option, value) => option.name === value.name}
                      onChange={handleGearboxChange}
                      renderInput={params => <TextField {...params} required={true} label='Тип' variant='outlined' />}
                  />
                </p>
            ) : null}
            {showModification ? (
                <p>
                  <h3>Модификация</h3>
                  <RadioGroup name="modification" value={modificationValue} onChange={handleModificationChange}>
                    {modifications.map((modification: Modification) => (
                        <>
                          <FormControlLabel value={modification.id.toString()} control={
                            <Radio required color="primary" />
                          } label={`${modification.hp} л.с | ${modification.engineCapacity} л.`} />
                        </>
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
                  className={classes.textFieldBlock}
                  label="vin"
                  name="vin"
                  onChange={handleVinNumberChange}
                  variant="outlined"
                  value={vinNumber}
                  id="formatted-numberformat-input"
                  error={'vin' in errors}
                  helperText={'vin' in errors ? errors.vin.message : ''}
              />
            </p>
          </div>
        </Paper>
        <Paper className={classes.paper}>
          <div className={classes.imageArea}>
            <h2>Добавьте фото</h2>
            <DropzoneArea
                filesLimit={maxNumber}
                dropzoneText='Нажмите или перетащите фото'
                acceptedFiles={['image/*']}
                onChange={handleImagesChange}
            />
          </div>
        </Paper>
        <Paper className={classes.paper}>
          <div className={classes.inputBlock}>
            <h2>Дополнительная информация</h2>
            <p>
              <h3>Пробег</h3>
              <TextField
                  required
                  fullWidth
                  inputRef={append}
                  label="Км"
                  value={mileage}
                  onChange={handleMileageChange}
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
              <ColorPalette palette={palette} onSelect={(color) => {dispatch(changeColor(palette[color]))}} />
            </p>
            <p>
              <h3>
                Комментарий
              </h3>
              <TextField
                  name="comment"
                  variant="outlined"
                  className={classes.textFieldBlock}
                  placeholder="Добавьте описание"
                  value={comment}
                  onChange={handleCommentChange}
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
                  value={phone}
                  onChange={handlePhoneChange}
                  label="Телефон"
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
              <RadioGroup aria-label="countOwners" name="countOwners" onChange={handleCountOwnersChange}>
                <FormControlLabel value="1" control={<Radio required color="primary" />} label="1" />
                <FormControlLabel value="2" control={<Radio required color="primary" />} label="2" />
                <FormControlLabel value="3" control={<Radio required color="primary" />} label="3" />
                <FormControlLabel value="4+" control={<Radio required color="primary" />} label="4+" />
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
                  value={price}
                  label="В рублях"
                  onChange={handlePriceChange}
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

export default AppendAdPage;
