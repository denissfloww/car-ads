import {Button, Paper, TextField, Typography} from '@material-ui/core';
import { Image } from '@material-ui/icons';
import { on } from 'cluster';
import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeBrand, changeModel, changeYear, selectAppendState } from '../../redux/slices/appendSlice';
import { useAppendPageStyles } from '../../styles/muiStyles';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import { Autocomplete } from '@material-ui/lab';
import ImageUploading, { ImageListType } from "react-images-uploading";


const AppendAdPage = () => {
  const classes = useAppendPageStyles()
  const { showModels, showYear, showBody } = useSelector(selectAppendState);
  const dispatch = useDispatch();
  const [images, setImages] = useState([]);
  const maxNumber = 40;
  const onChangeBrand = () => {
    dispatch(changeBrand())
  }
  const onChangeModel = () => {
    dispatch(changeModel())
  }
  const  onChangeYear = () => {
    dispatch(changeYear())
  }

  const onChange = (
        imageList: ImageListType,
        addUpdateIndex: number[] | undefined
    ) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList as never[]);
    };
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
            onChange={onChangeBrand}
            onInputChange={onChangeBrand}
            disableClearable={true}
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
          {showModels ?
            <p>
              <h3>Выберите модель</h3>
              <Autocomplete
                id="combo-box-demo"
                options={top100Films}
                getOptionLabel={(option) => option.title}
                onChange={onChangeModel}
                renderInput={(params) => <TextField {...params} label="Выберите марку" variant="outlined" />}
                renderOption={options => {
                  return (
                    <>
                      <img style={{width: "40px", height:"40px"}} src={options.imageUrl} alt='' />
                      {options.title}
                    </>
                  )
                }}
              />
            </p>
            :null}
          {showYear?
            <p>
              <h3>Выберите год выпуска авто</h3>
              <Autocomplete
                id="combo-box-demo"
                options={top100Films}
                getOptionLabel={(option) => option.title}
                onChange={onChangeYear}
                renderInput={(params) => <TextField {...params} label="Выберите год выпуска авто" variant="outlined" />}
                renderOption={options => {
                  return (
                    <>
                      <img style={{width: "40px", height:"40px"}} src={options.imageUrl} alt='' />
                      {options.title}
                    </>
                  )
                }}
              />
            </p>
            : null}
          {showBody ?
            <p>
              <h3>Выберите тип кузова</h3>
              <Autocomplete
                id="combo-box-demo"
                options={top100Films}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => <TextField {...params} label="Выберите год выпуска авто" variant="outlined" />}
                renderOption={options => {
                  return (
                    <>
                      <img style={{width: "40px", height:"40px"}} src={options.imageUrl} alt='' />
                      {options.title}
                    </>
                  )
                }}
              />
            </p>
            : null}

            <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
            >
                {({
                      imageList,
                      onImageUpload,
                      onImageRemoveAll,
                      onImageUpdate,
                      onImageRemove,
                      isDragging,
                      dragProps
                  }) => (
                    // write your building UI
                    <div className="upload__image-wrapper">
                        <button
                            style={isDragging ? { color: "red" } : undefined}
                            onClick={onImageUpload}
                            {...dragProps}
                        >
                            Click or Drop here
                        </button>
                        &nbsp;
                        <button onClick={onImageRemoveAll}>Remove all images</button>
                        {imageList.map((image, index) => (
                            <div key={index} className="image-item">
                                <img src={image.dataURL} alt="" width="100" />
                                <div className="image-item__btn-wrapper">
                                    <button onClick={() => onImageUpdate(index)}>Update</button>
                                    <button onClick={() => onImageRemove(index)}>Remove</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </ImageUploading>
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