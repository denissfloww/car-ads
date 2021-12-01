import { Button } from '@material-ui/core';
import { useNavStyles } from '../styles/muiStyles';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { loginLink, signupLink } from '../Links';

const AuthButton = () => {
  const classes = useNavStyles();
  return (
    <>
      <Button className={classes.menuButton} id='loginButton' component={RouterLink} to={loginLink}>
        Вход
      </Button>
      <Button className={classes.menuButton} component={RouterLink} to={signupLink}>
        {' '}
        Регистрация
      </Button>
    </>
  );
};

export default AuthButton;
