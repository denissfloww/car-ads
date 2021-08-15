import {Button, Paper, Typography} from '@material-ui/core';
import { useMainPageStyles } from '../../styles/muiStyles';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import {homeLink, mainLink} from "../../Links";
import {Link as RouterLink} from "react-router-dom";
import CarIcon from "../../svg/logo.png";
import React from "react";

const SuccessAppendPage = () => {
    const classes = useMainPageStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.successAppendPaper}>
                <div className={classes.successAppendWrapper}>
                    <CheckCircleOutlineIcon style={{ width: '200px', height: '200px' }} />
                    <Typography color='inherit' variant='h6' className={classes.successAppendText}>
                        <p>Объявление успешно добавлено!</p>
                    </Typography>
                    <Button variant="contained" color="primary" to={homeLink} component={RouterLink}>
                        Перейти в мои объявления
                    </Button>
                </div>
            </Paper>
        </div>
    );
};

export default SuccessAppendPage;