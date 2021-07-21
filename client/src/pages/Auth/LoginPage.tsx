import {useDispatch, useSelector} from "react-redux";
import {Interface} from "readline";
import {
    login,
    selectAuthState,
    cancel
} from '../../redux/slices/authSlice';
import {useForm} from "react-hook-form";
import React from "react";
import {AppBar, Button, Container, InputAdornment, TextField} from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { useAuthPageStyles } from "../../styles/muiStyles";
import PersonIcon from '@material-ui/icons/Person';
interface InputValues{
    username: string;
    password: string;
}

const LoginPage = () => {
    const classes = useAuthPageStyles();
    const dispatch = useDispatch();
    const { loading } = useSelector(selectAuthState)

    const { register, handleSubmit, errors } = useForm({
        mode: 'onChange',
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
                    <TextField
                        fullWidth
                        type="text"
                        label="Username"
                        variant="outlined"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PersonIcon color="primary" />
                                </InputAdornment>
                            ),
                        }}
                    />
                </form>
            </Paper>
            {/*<form onSubmit={handleSubmit(handleLogin)}>*/}
            {/*    {loading}*/}
            {/*    <Button*/}
            {/*        color="primary"*/}
            {/*        variant="contained"*/}
            {/*        size="large"*/}
            {/*        fullWidth*/}
            {/*        type="submit"*/}
            {/*        disabled={loading}*/}
            {/*    >*/}
            {/*        Lock*/}
            {/*    </Button>*/}
            {/*</form>*/}
            {/*<form onSubmit={handleSubmit(handleCancel)}>*/}
            {/*    {loading}*/}
            {/*    <Button*/}
            {/*        color="primary"*/}
            {/*        variant="contained"*/}
            {/*        size="large"*/}
            {/*        fullWidth*/}
            {/*        type="submit"*/}
            {/*    >*/}
            {/*        Open*/}
            {/*    </Button>*/}
            {/*</form>*/}
        </div>

    )
}

export default LoginPage;