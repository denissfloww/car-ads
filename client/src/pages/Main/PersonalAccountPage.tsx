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

const cards = [1, 2,1, 2];

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
            <Container maxWidth="md" className={classes.cardGrid}>
              <Grid container spacing={2}>
                {cards.map((card) => (
                  <UserAdCard brand={'BMW'} model={'3'} images={['https://avatars.mds.yandex.net/get-autoru-vos/1711983/4c3361bade11d7b9fbd81257ab3f19e3/1200x900n','https://avatars.mds.yandex.net/get-autoru-vos/1711983/4c3361bade11d7b9fbd81257ab3f19e3/1200x900n']}/>
                ))}
              </Grid>
            </Container>
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
