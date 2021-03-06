import {
  Button,
  FormControlLabel,
  Paper,
  RadioGroup,
  TextField,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  appendAdd,
  changeBody,
  changeBrand,
  changeColor,
  changeCountOwners,
  changeDrive,
  changeEngine,
  changeGearBox,
  changeGeneration,
  changeModel,
  changeModification,
  changePhone,
  changeYear,
  fetchBrands,
  selectAppendState,
} from '../../redux/slices/appendSlice';
import { selectAuthState } from "../../redux/slices/authSlice";
import { useAppendPageStyles } from '../../styles/muiStyles';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import { Autocomplete } from '@material-ui/lab';
import { DropzoneArea } from 'material-ui-dropzone';
import { ColorPalette } from 'material-ui-color';
import MilageFormatCustom from '../../components/MilageTextMask';
import PhoneMask from '../../components/PhoneMask';
import { Radio } from '@material-ui/core';
import PriceFormatCustom from '../../components/PriceFormatMask';
import PublishIcon from '@material-ui/icons/Publish';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import '../../styles/AppendPageStyle.css';
import { useHistory } from 'react-router-dom';
import { palette } from '../../const/palette';
import AppendInputAutoComplete from '../../components/AppendFormComponents/AutoComplete';
import GenerationSelector from '../../components/AppendFormComponents/GenerationSelector';
import ModificationSelector from '../../components/AppendFormComponents/ModificationSelector';
import Animate from '@charlesvien/react-animatecss';

const validationSchema = yup.object({
  mileage: yup.string().required('Заполните это поле!'),
  vin: yup.string().required('Заполните это поле!'),
  price: yup.string().required('Заполните это поле!'),
  // phone: yup
  //   .string(),
  //   // .required('Заполните это поле!')
  //   // .matches(/^7\([1-9]+\)\s\d+-\d{4}$/, 'Введите корректный формат телефона'),
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
    color,
    countOwners,
  }: any = useSelector(selectAppendState);

  const [images, setImages] = useState([]);
  const [mileage, setMileage] = useState(43201);
  const [comment, setComment] = useState('Комментарий')
  const [phone, setPhone] = useState('9199234517')
  const [price, setPrice] = useState('200000')
  const [vinNumber, setVin] = useState('test')

  const maxNumber = 10;
  useEffect(() => {
    dispatch(fetchBrands());
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
    dispatch(changeBody(value, yearValue, modelValue));
  };

  const handleEngineChange = (_: any, value: any) => {
    dispatch(changeEngine(value, modelValue, bodyValue, generationValue));
  };

  const handleGenerationChange = (_: any, value: any) => {
    dispatch(changeGeneration(value, modelValue, bodyValue));
  };

  const handleDriveChange = (_: any, value: any) => {
    dispatch(changeDrive(value, modelValue, bodyValue, generationValue, engineValue));
  };

  const handleGearboxChange = (_: any, value: any) => {
    dispatch(changeGearBox(value, modelValue, bodyValue, generationValue, engineValue, driveValue));
  };

  const handleModificationChange = (_: any, value: any) => {
    dispatch(changeModification(value));
  };

  const handleImagesChange = (images: any) => {
    setImages(images);
  };

  const handleVinNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVin(event.target.value)
  };


  const handleMileageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMileage(Number(event.target.value))
  };

  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value)
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value)
  };

  const handleCountOwnersChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeCountOwners(event.target.value));
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.value)
  };

  const {
    register: append,
    handleSubmit,
    errors,
    getValues,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  });

  const handleAppend = () => {
    dispatch(appendAdd(history, modificationValue, vinNumber, images, mileage, color, comment, phone, countOwners, price, yearValue));
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
                  id="brandSelect"
                  onChange={handleBrandChange}
                  renderInput={params => (
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
                  )}
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
                  <Animate
                    animationIn="fadeIn"
                    animationOut="fadeOut"
                    inDuration={400}
                    outDuration={400}
                    visible={showModels}
                  >
                    <h3>Выберите модель</h3>
                    <AppendInputAutoComplete handleChange={handleModelChange} value={modelValue} options={models} optionLabel='Модель'  id='modelSelect'/>
                  </Animate>
                </p>
              ) : null}
              {showYear ? (
                <p>
                  <Animate
                    animationIn="fadeIn"
                    animationOut="fadeOut"
                    inDuration={400}
                    outDuration={400}
                    visible={showYear}
                  >
                  <h3>Выберите год выпуска авто</h3>
                    <AppendInputAutoComplete handleChange={handleYearChange} value={yearValue} options={years} optionLabel='Год выпуска' id='yearSelect' />
                  </Animate>
                  </p>
              ) : null}
              {showBody ? (
                <p>
                  <Animate
                    animationIn="fadeIn"
                    animationOut="fadeOut"
                    inDuration={400}
                    outDuration={400}
                    visible={showBody}
                  >
                    <h3>Выберите тип кузова</h3>
                    <AppendInputAutoComplete handleChange={handleBodyChange} value={bodyValue} options={bodies} optionLabel='Тип кузова' id='bodyTypeSelect' />
                  </Animate>
                  </p>
              ) : null}
              {showGeneration ? (
                <p>
                  <Animate
                    animationIn="fadeIn"
                    animationOut="fadeOut"
                    inDuration={400}
                    outDuration={400}
                    visible={showGeneration}
                  >
                  <h3>Поколение</h3>
                  <GenerationSelector generations={generations} handleGenerationChange={handleGenerationChange} />
                  </Animate>
                </p>
              ) : null}
              {showEngine ? (
                <p>
                  <Animate
                    animationIn="fadeIn"
                    animationOut="fadeOut"
                    inDuration={400}
                    outDuration={400}
                    visible={showEngine}
                  >
                  <h3>Выберите тип двигателя</h3>
                  <AppendInputAutoComplete
                    handleChange={handleEngineChange}
                    value={engineValue}
                    options={engines}
                    optionLabel='Тип двигателя'
                    id='engineType'
                  />
                  </Animate>
                </p>
              ) : null}
              {showDrive ? (
                <p>
                  <Animate
                    animationIn="fadeIn"
                    animationOut="fadeOut"
                    inDuration={400}
                    outDuration={400}
                    visible={showDrive}
                  >
                  <h3>Выберите привод</h3>
                  <AppendInputAutoComplete handleChange={handleDriveChange} value={driveValue} options={drives} optionLabel='Тип' id='driveTypeSelect' />
                  </Animate>
                </p>
              ) : null}
              {showGearBox ? (
                <p>
                  <Animate
                    animationIn="fadeIn"
                    animationOut="fadeOut"
                    inDuration={400}
                    outDuration={400}
                    visible={showGearBox}
                  >
                  <h3>Выберите коробку передач</h3>
                  <AppendInputAutoComplete handleChange={handleGearboxChange} value={gearboxValue} options={gearboxes} optionLabel='Тип' id='gearBoxSelect' />
                  </Animate>
                </p>
              ) : null}
              {showModification ? (
                <p>
                  <Animate
                    animationIn="fadeIn"
                    animationOut="fadeOut"
                    inDuration={400}
                    outDuration={400}
                    visible={showModification}
                  >
                  <h3>Модификация</h3>
                  <ModificationSelector
                    modifications={modifications}
                    modificationValue={modificationValue}
                    handleModificationChange={handleModificationChange}
                  />
                  </Animate>
                </p>
              ) : null}
              <p>
                <h3>VIN-номер</h3>
                <TextField
                  required
                  fullWidth
                  inputRef={append}
                  className={classes.textFieldBlock}
                  label='vin'
                  name='vin'
                  onChange={handleVinNumberChange}
                  variant='outlined'
                  value={vinNumber}
                  id='vinNumber'
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
                  label='Км'
                  value={mileage}
                  onChange={handleMileageChange}
                  type='text'
                  variant='outlined'
                  name='mileage'
                  id='mileageInput'
                  error={'mileage' in errors}
                  helperText={'mileage' in errors ? errors.mileage.message : ''}
                  InputProps={{
                    inputComponent: MilageFormatCustom as any,
                  }}
                />
              </p>
              <p>
                <h3>Цвет</h3>
                <ColorPalette
                  palette={palette}
                  onSelect={color => {
                    dispatch(changeColor(palette[color]));
                  }}
                />
              </p>
              <p>
                <h3>Комментарий</h3>
                <TextField
                  name='comment'
                  id='descriptionArea'
                  variant='outlined'
                  className={classes.textFieldBlock}
                  placeholder='Добавьте описание'
                  value={comment}
                  onChange={handleCommentChange}
                  multiline
                  rows={2}
                  rowsMax={Infinity}
                />
              </p>
              {/*<p>*/}
              {/*  <h3>Контактный телефон</h3>*/}
              {/*  <TextField*/}
              {/*    required*/}
              {/*    fullWidth*/}
              {/*    inputRef={append}*/}
              {/*    value={phone}*/}
              {/*    onChange={handlePhoneChange}*/}
              {/*    label='Телефон'*/}
              {/*    variant='outlined'*/}
              {/*    name='phone'*/}
              {/*    id='phoneNumberInput'*/}
              {/*    error={'phone' in errors}*/}
              {/*    helperText={'phone' in errors ? errors.phone.message : ''}*/}
              {/*    InputProps={{*/}
              {/*      inputComponent: PhoneMask as any,*/}
              {/*    }}*/}
              {/*  />*/}
              {/*</p>*/}
              <p>
                <h3>Колличество владельцев</h3>
                <RadioGroup aria-label='countOwners' name='countOwners' onChange={handleCountOwnersChange}>
                  {ownersRadioValues.map((item: { label: string; value: string }) => (
                    <FormControlLabel value={item.value} control={<Radio required color='primary' id={`countOwnersRadio${item.value}`} />}  label={item.label} />
                  ))}
                </RadioGroup>
              </p>
              <p>
                <h3>Цена</h3>
                <TextField
                  required
                  fullWidth
                  inputRef={append}
                  value={price}
                  label='В рублях'
                  onChange={handlePriceChange}
                  variant='outlined'
                  name='price'
                  id='priceInput'
                  error={'price' in errors}
                  helperText={'price' in errors ? errors.price.message : ''}
                  InputProps={{
                    inputComponent: PriceFormatCustom as any,
                  }}
                />
              </p>
              <p>
                <Button variant='contained' color='primary' type='submit' id='addButton' startIcon={<PublishIcon />}>
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

const ownersRadioValues = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4+' },
];

export default AppendAdPage;
