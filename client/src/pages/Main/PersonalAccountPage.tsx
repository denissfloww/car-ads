import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import UserAdCatalog from "../../components/PersonalAccountPageComponents/UserAdCatalog";
import SkeletonCatalogAdCard from "../../components/CatalogPageComponent/SkeletonCatalogAdCard";
import SkeletonUserAdCard from "../../components/PersonalAccountPageComponents/SkeletonUserAdCard";
import { Ad } from "../../interfaces/Ad";
import { fetchUserAds, selectAdState } from "../../redux/slices/adSlice";
import { selectAuthState } from "../../redux/slices/authSlice";
import LocalStorageService from "../../services/LocalStorageService";
import { usePersonalAccountStyles } from '../../styles/muiStyles';
import {
  Button,
  Container,
  Grid,
  Paper,
  Tab
} from "@material-ui/core";
import Tabs from '@material-ui/core/Tabs';
import TabPanel from '../../components/TabPanel';
import UserAdCard from '../../components/PersonalAccountPageComponents/UserAdCard';
import { appendAdLink } from "../../Links";
import AppendAdPage from "./AppendAdPage";
import CompareAdsTab from "../../components/CompareAdsComponents/CompareAdsTab";

const PersonalAccountPage = () => {
  const classes = usePersonalAccountStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event: any, newValue: React.SetStateAction<number>) => {
    setValue(newValue);
  };
  const dispatch = useDispatch()
  const { user } = useSelector(selectAuthState);
  const userId = user? user.id : LocalStorageService.getUser().id;
  useEffect(() => {
    dispatch(fetchUserAds(userId))
  }, [])

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <div className={classes.tabs}>
          <Container maxWidth="xl">
            <Grid >
              <Tabs value={value} onChange={handleChange} className={classes.tabs}>
                <Tab className={classes.tabsButton} label='Мои объявления' />
                <Tab className={classes.tabsButton} label='Сравнения' />
                <Tab className={classes.tabsButton} label='Настройки профиля' />
              </Tabs>
            </Grid>
          </Container>
          <TabPanel index={0} value={value}>
           <UserAdCatalog />
          </TabPanel>
          <TabPanel index={1} value={value}>
            <CompareAdsTab />
          </TabPanel>
          <TabPanel index={2} value={value}>
            Тут мои найстройки
          </TabPanel>
        </div>
      </Paper>
    </div>
  );
};

export default PersonalAccountPage;
