import {Button} from "@material-ui/core";
import {useNavStyles} from "../styles/muiStyles";
import React from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import {homeLink, loginLink, mainLink, signupLink} from '../Links';
import CarIcon from '../svg/logo.png';
import LocalStorageService from '../services/LocalStorageService';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectAuthState } from '../redux/slices/authSlice';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Container from '@material-ui/core/Container';

const AuthButton = () => {
    const classes = useNavStyles();
    return (
        <>
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
            > Регистрация
            </Button>
        </>
    );
}

export default AuthButton;