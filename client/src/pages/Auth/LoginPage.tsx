import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearAuthError, login, selectAuthState } from '../../redux/slices/authSlice';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import CarIcon from '../../svg/logo.png';
import { Button, CircularProgress, IconButton, InputAdornment, Link, TextField, Typography } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { useAuthPageStyles } from '../../styles/muiStyles';
import PersonIcon from '@material-ui/icons/Person';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import LockIcon from '@material-ui/icons/Lock';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DemoCreds from '../../components/DemoCreds';
import { signupLink } from '../../Links';
import { Link as RouterLink } from 'react-router-dom';
import ErrorBox from '../../components/ErrorBox';

interface InputValues {
  username: string;
  password: string;
}

const validationSchema = yup.object({
  username: yup.string().required('Required'),
  password: yup.string().required('Required'),
});

const LoginPage = () => {
  const classes = useAuthPageStyles();
  const dispatch = useDispatch();
  const { loading, error } = useSelector(selectAuthState);
  const [showPass, setShowPass] = useState<boolean>(false);
  const { register, handleSubmit, errors } = useForm({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  });
  const history = useHistory();

  const handleLogin = ({ username, password }: InputValues) => {
    dispatch(login({ username, password }, history));
  };

  return (
    <div>
      <Paper className={classes.root} elevation={2}>
        <form onSubmit={handleSubmit(handleLogin)} className={classes.form}>
          <img src={CarIcon} alt='bug-logo' className={classes.titleLogo} />
          <Typography variant='body1' className={classes.headerText}>
            ????????
          </Typography>
          <div className={classes.inputField}>
            <TextField
              required
              id="usernameField"
              fullWidth
              inputRef={register}
              type='text'
              label='??????????'
              name='username'
              variant='outlined'
              error={'username' in errors}
              helperText={'username' in errors ? errors.username.message : ''}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <PersonIcon className={classes.iconColor} />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className={classes.inputField}>
            <TextField
              required
              fullWidth
              id="passwordField"
              inputRef={register}
              type={showPass ? 'text' : 'password'}
              label='????????????'
              name='password'
              variant='outlined'
              error={'password' in errors}
              helperText={'password' in errors ? errors.password.message : ''}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton size='small' onClick={() => setShowPass(prevState => !prevState)}>
                      {showPass ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
                startAdornment: (
                  <InputAdornment position='start'>
                    <LockIcon className={classes.iconColor} />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <Button
            color='inherit'
            variant='contained'
            size='large'
            id="submitLoginButton"
            fullWidth
            type='submit'
            className={classes.submitButton}
            disabled={loading}
          >
            {loading?  <CircularProgress /> : <>??????????</>}
          </Button>
          <DemoCreds />
        </form>
        <Typography variant='body1' className={classes.footerText}>
          ?????? ?????????????????{' '}
          <Link color='primary' to={signupLink} component={RouterLink}>
            ????????????????????????????????????
          </Link>
        </Typography>
        {error && <ErrorBox errorMsg={error} clearErrorMsg={() => dispatch(clearAuthError())} />}
      </Paper>
    </div>
  );
};

export default LoginPage;
