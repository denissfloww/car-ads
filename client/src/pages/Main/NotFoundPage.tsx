import { Paper, Typography } from '@material-ui/core';
import { useMainPageStyles } from '../../styles/muiStyles';
import  notFoundImg  from '../../svg/404 error page.png'

const NotFoundPage = () => {
    const classes = useMainPageStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.notFoundPaper}>
                <div className={classes.notFoundWrapper}>
                    <img src={notFoundImg} alt="" width='500px' height='500px' />
                    <Typography
                        color="inherit"
                        variant="h6"
                        className={classes.error404Text}
                    >
                        Страница не найдена!
                    </Typography>
                </div>
            </Paper>
        </div>
    );
};

export default NotFoundPage;