import React from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';

import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Tab,
  Tabs,
  Toolbar,
  Typography
} from '@material-ui/core';

import { homeLink, loginLink, mainLink, signupLink } from '../Links';
import { useNavStyles } from '../styles/muiStyles';
import CarIcon from '../svg/logo.png';
import LocalStorageService from '../services/LocalStorageService';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectAuthState } from '../redux/slices/authSlice';
import MainPage from '../pages/Main/MainPage';

const NavBar = () => {
  const classes = useNavStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const { user } = useSelector(selectAuthState);
  const isAuth = user || LocalStorageService.getUser();

  const handleLogout = () => {
    dispatch(logout());
    history.push(loginLink);
  };

  return (
    <AppBar className={classes.header}>
      <Toolbar className={classes.toolbar}>
        <Button to={mainLink} component={RouterLink}>
          <img src={CarIcon} alt="" />
        </Button>
        <Button className={classes.menuButton}>Объявления</Button>
        <Button className={classes.menuButton}>Новости</Button>
        <Button
          className={classes.menuButton}
          component={RouterLink}
          to={loginLink}
        >
          Вход
        </Button>
        <Button
          className={classes.menuButton}
          component={RouterLink}
          to={signupLink}
        >
          Регистрация
        </Button>
        {isAuth ? (
          <Button className={classes.menuButton} onClick={handleLogout}>
            Выйти
          </Button>
        ) : null}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
