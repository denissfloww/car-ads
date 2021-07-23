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
import PersonAddIcon from '@material-ui/icons/PersonAdd';

import DemoCreds from "../../components/DemoCreds";
import {loginLink} from "../../Links";
import {Link as RouterLink} from "react-router-dom";

interface InputValues{
    username: string;
    password: string;
    confirmPassword: string;
}

const validationSchema = yup.object({
    username: yup
        .string()
        .required('Required')
        .max(20, 'Должно быть не более 20 символов')
        .min(3, 'Должно быть не менее 3 символов')
        .matches(
            /^[a-zA-Z0-9-_]*$/,
            'Допускаются только буквы, тире и символы подчеркивания'
        ),
    password: yup
        .string()
        .required('Required')
        .min(6, 'Должно быть не менее 6 символов'),
    confirmPassword: yup
        .string()
        .required('Required')
        .min(6, 'Должно быть не менее 6 символов'),
});

const SignupPage = () => {
    const classes = useAuthPageStyles();
    const dispatch = useDispatch();
    const { loading } = useSelector(selectAuthState)
    const [showPass, setShowPass] = useState<boolean>(false)
    const [showConfirmPass, setShowConfirmPass] = useState<boolean>(false)

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
                        Регистрация
                    </Typography>
                    <div className={classes.inputField}>
                        <TextField
                            required
                            fullWidth
                            inputRef={register}
                            type="text"
                            name="username"
                            label="Логин"
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
                            name="password"
                            label="Пароль"
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
                    <div className={classes.inputField}>
                        <TextField
                            required
                            fullWidth
                            inputRef={register}
                            type={showConfirmPass ? 'text': 'password'}
                            label="Подтверждение пароля"
                            name="confirmPassword"
                            variant="outlined"
                            error={'confirmPassword' in errors}
                            helperText={
                                'confirmPassword' in errors
                                    ? errors.confirmPassword.message
                                    : ''
                            }
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            size="small"
                                            onClick={() => setShowConfirmPass(prevState => !prevState)}
                                        >
                                            {showConfirmPass ? <VisibilityOffIcon /> : <VisibilityIcon />}
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
                        startIcon={<PersonAddIcon />}
                        type="submit"
                        className={classes.submitButton}
                        disabled={loading}
                    >
                        Зарегистрироваться
                    </Button>
                </form>
                <Typography variant="body1" className={classes.footerText}>
                    Уже есть аккаунт?{' '}
                    <Link
                        color="primary"
                        to={loginLink}
                        component={RouterLink}
                    >
                        Войти
                    </Link>
                </Typography>
            </Paper>
        </div>

    )
}

export default SignupPage;