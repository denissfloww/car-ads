import React from 'react';
import { usePersonalAccountStyles } from '../../styles/muiStyles';
import {
  Container,
  Grid,
  Paper,
  Tab
} from "@material-ui/core";
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
          <Container maxWidth="md">
            <Grid style={{ margin: '0 auto', textTransform: 'inherit' }}>
              <Tabs value={value} onChange={handleChange}>
                <Tab className={classes.tabsButton} label='Мои объявления' />
                <Tab className={classes.tabsButton} label='Настройки профиля' />
              </Tabs>
            </Grid>
          </Container>



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
