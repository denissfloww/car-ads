import React from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { AppBar, Button, Toolbar } from '@material-ui/core';
import { homeLink, loginLink, mainLink, signupLink } from '../Links';
import { useNavStyles } from '../styles/muiStyles';
import CarIcon from '../svg/logo.png';
import LocalStorageService from '../services/LocalStorageService';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectAuthState } from '../redux/slices/authSlice';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Container from '@material-ui/core/Container';
import AuthButton from './AuthButton';
import PersonalAccountButton from './PersonalAccountButton';

const NavBar = () => {
  const classes = useNavStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const { user } = useSelector(selectAuthState);
  const isAuth = user || LocalStorageService.getUser();

  const handleLogout = () => {
    dispatch(logout(history));
    history.push(loginLink);
  };

  return (
    <Container className={classes.container}>
      <AppBar elevation={1} color='inherit' position='static' className={classes.appBar}>
        <Toolbar variant='dense'>
          <div className={classes.leftPortion}>
            <Button to={mainLink} component={RouterLink}>
              <img src={CarIcon} alt='' />
            </Button>
            <Button className={classes.menuButton}>Объявления</Button>
            <Button className={classes.menuButton}>Новости</Button>
          </div>
          {!isAuth ? <AuthButton /> : null}
          {isAuth ? <PersonalAccountButton handleLogout={handleLogout} /> : null}
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default NavBar;
