import { Paper, Typography } from '@material-ui/core';
import { useMainPageStyles } from '../../styles/muiStyles';

const MainPage = () => {
  const classes = useMainPageStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.notFoundPaper}>
        <div className={classes.notFoundWrapper}>
          <Typography
            color="inherit"
            variant="h6"
            className={classes.error404Text}
          >
            <p>Главная страница</p>
          </Typography>
        </div>
      </Paper>
    </div>
  );
};

export default MainPage;
