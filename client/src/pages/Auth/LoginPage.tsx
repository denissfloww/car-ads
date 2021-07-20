import {useDispatch, useSelector} from "react-redux";
import {Interface} from "readline";
import {
    login,
    selectAuthState,
    cancel
} from '../../redux/slices/authSlice';
import {useForm} from "react-hook-form";
import React from "react";
import { Button } from "@material-ui/core";

interface InputValues{
    username: string;
    password: string;
}

const LoginPage = () => {
    const dispatch = useDispatch();
    const { loading } = useSelector(selectAuthState)
    // const handleLogin = ({ username, password }: InputValues) => {
    //     dispatch()
    // }
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
            <form onSubmit={handleSubmit(handleLogin)}>
                {loading}
                <Button
                    color="primary"
                    variant="contained"
                    size="large"
                    fullWidth
                    type="submit"
                    disabled={loading}
                >
                    Lock
                </Button>
            </form>
            <form onSubmit={handleSubmit(handleCancel)}>
                {loading}
                <Button
                    color="primary"
                    variant="contained"
                    size="large"
                    fullWidth
                    type="submit"
                >
                    Open
                </Button>
            </form>

        </div>
    )
}

export default LoginPage;