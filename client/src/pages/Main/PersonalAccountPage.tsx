import React from 'react';
import { usePersonalAccountStyles } from '../../styles/muiStyles';
import { Paper, Tab } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import TabPanel from '../../components/TabPanel';

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
            <Tab label='Объявления' />
            <Tab label='Настройки' />
          </Tabs>
          <TabPanel index={0} value={value}>
            Тут мои объявления
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
