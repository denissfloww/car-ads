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
import AddIcon from '@material-ui/icons/Add';
import Container from '@material-ui/core/Container';
import { Tooltip } from "@material-ui/core";

const PersonalAccountButton:React.FC<{ handleLogout: () => void }> = ({handleLogout}) => {

    const classes = useNavStyles();
    return (
        <>
            <Tooltip title="Личный кабинет">
                    <Button className={classes.iconButton} component={RouterLink} to={homeLink}>
                        <AccountCircleIcon />
                    </Button>
            </Tooltip>
            <Tooltip title="Выйти">
                    <Button className={classes.iconButton} onClick={handleLogout}>
                        <ExitToAppIcon />
                    </Button>
            </Tooltip>
            <Tooltip title="Добавить объявление">
                <Button className={classes.iconButton}>
                    Подать объявление
                    <AddIcon />
                </Button>
            </Tooltip>
        </>
    );
}

export default PersonalAccountButton;