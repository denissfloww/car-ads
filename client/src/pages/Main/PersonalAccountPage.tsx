import React from 'react';
import { usePersonalAccountStyles } from '../../styles/muiStyles';
import {
  Button,
  Card, CardActionArea,
  CardActions,
  CardContent,
  CardMedia, createStyles,
  IconButton,
  makeStyles,
  Paper,
  Tab, Theme,
  Typography
} from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import TabPanel from '../../components/TabPanel';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import UserAdCard from "../../components/AutoCompletes/UserAdCard";

const PersonalAccountPage = () => {
  const classes = usePersonalAccountStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event: any, newValue: React.SetStateAction<number>) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <div className={classes.tabs}>
          <Tabs value={value} onChange={handleChange}>
            <Tab style={{fontFamily:'Nunito'}} label='Мои Объявления' />
            <Tab style={{fontFamily:'Nunito'}} label='Настройки профиля' />
          </Tabs>
          <TabPanel index={0} value={value}>
           <UserAdCard />
          </TabPanel>
          <TabPanel index={1} value={value}>
            Тут мои найстройки

          </TabPanel>
        </div>
      </Paper>
    </div>
  );
};

export default PersonalAccountPage;
