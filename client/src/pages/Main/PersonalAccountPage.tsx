import React from 'react';
import { usePersonalAccountStyles } from '../../styles/muiStyles';
import {
  Grid,
  Paper,
  Tab,
} from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import TabPanel from '../../components/TabPanel';
import UserAdCard from '../../components/UserAdCard';

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
          <Grid item md={11} style={{ margin: '0 auto' }}>
            <Tabs value={value} onChange={handleChange}>
              <Tab style={{ fontFamily: 'Nunito' }} label='Мои Объявления' />
              <Tab style={{ fontFamily: 'Nunito' }} label='Настройки профиля' />
            </Tabs>
          </Grid>

          <TabPanel index={0} value={value}>
            <UserAdCard />
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
