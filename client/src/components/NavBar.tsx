import React from "react";
import { Link as RouterLink } from 'react-router-dom';

import {
    AppBar, Box,
    Button,
    Container, IconButton, Tab, Tabs,
    Toolbar, Typography
} from "@material-ui/core";

import { loginLink, signupLink } from '../Links'
import { useNavStyles } from "../styles/muiStyles";
import CarIcon from '../svg/logo.png';
import LocalStorageService from "../services/LocalStorageService";
import {useSelector} from "react-redux";
import {selectAuthState} from "../redux/slices/authSlice";


const NavBar = () => {
    const classes = useNavStyles();
    const { user } = useSelector(selectAuthState)
    const isAuth = user || LocalStorageService.getUser()

    return (
            <AppBar className={classes.header}>
                <Toolbar className={classes.toolbar}>
                    <img src={CarIcon} alt=""/>
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
                    {isAuth? <Button>testButton</Button>: null}
                </Toolbar>
            </AppBar>
    );
}

export default NavBar;