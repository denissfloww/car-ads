import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {
    login,
    selectAuthState,
    cancel
} from '../../redux/slices/authSlice';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import CarIcon from '../../svg/logo.png';
import {
    AppBar,
    Button,
    Container,
    IconButton,
    InputAdornment,
    Link,
    TextField,
    Typography
} from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { useAuthPageStyles } from "../../styles/muiStyles";

import PersonIcon from '@material-ui/icons/Person';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import LockIcon from '@material-ui/icons/Lock';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DemoCreds from "../../components/DemoCreds";
import {loginLink, signupLink} from "../../Links";
import {Link as RouterLink} from "react-router-dom";

interface InputValues{
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
    const { loading } = useSelector(selectAuthState)
    const [showPass, setShowPass] = useState<boolean>(false)
    const { register, handleSubmit, errors } = useForm({
        mode: 'onChange',
        resolver: yupResolver(validationSchema),
    });
    const handleLogin = ({ username, password }: InputValues) => {
        dispatch(login({ username, password }));
    };

    const handleCancel = () => {
        dispatch(cancel())
    }

    return (
        <div>
            <Paper className={classes.root} elevation={2}>
                <form onSubmit={handleSubmit(handleLogin)} className={classes.form}>
                    <img src={CarIcon} alt="bug-logo" className={classes.titleLogo} />
                    <Typography variant="body1" className={classes.headerText}>
                        Вход
                    </Typography>
                    <div className={classes.inputField}>
                       <TextField
                           required
                           fullWidth
                           inputRef={register}
                           type="text"
                           label="Логин"
                           name="username"
                           variant="outlined"
                           error={'username' in errors}
                           helperText={'username' in errors ? errors.username.message : ''}
                           InputProps={{
                               startAdornment: (
                                   <InputAdornment position="start">
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
                            inputRef={register}
                            type={showPass ? 'text': 'password'}
                            label="Пароль"
                            name="password"
                            variant="outlined"
                            error={'password' in errors}
                            helperText={'password' in errors ? errors.password.message : ''}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            size="small"
                                            onClick={() => setShowPass(prevState => !prevState)}
                                        >
                                            {showPass ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockIcon className={classes.iconColor} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </div>
                    <Button
                        color="inherit"
                        variant="contained"
                        size="large"
                        fullWidth
                        startIcon={<ExitToAppIcon />}
                        type="submit"
                        className={classes.submitButton}
                        disabled={loading}
                    >
                        Войти
                    </Button>
                    <DemoCreds />
                </form>
                <Typography variant="body1" className={classes.footerText}>
                    Нет аккаунта?{' '}
                    <Link
                        color="primary"
                        to={signupLink}
                        component={RouterLink}
                    >
                        Зарегистрироваться
                    </Link>
                </Typography>
            </Paper>
        </div>

    )
}

export default LoginPage;