import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Button } from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import { checkCompareAd, checkFavouriteAd, fetchAds, fetchUserCompareAds, selectAdState } from '../../redux/slices/adSlice';
import { selectAuthState } from '../../redux/slices/authSlice';
import ExcelExportService from '../../services/ExcelExportService';
import LocalStorageService from '../../services/LocalStorageService';
import CompareTable from './CompareTable';
import CompareChart from './CompareChart';

const CompareAdsTab = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(selectAuthState);
  const isAuth = user || LocalStorageService.getUser();
  useEffect(() => {
    if (isAuth) {
      dispatch(fetchUserCompareAds(LocalStorageService.getUser().id));
    }
  }, []);

  const { userComparedAds } = useSelector(selectAdState);
  const handleExportClick = async () => {
    await ExcelExportService.exportToExcel(userComparedAds);
  };

  return (
    <Grid container>
      {userComparedAds.length? (
          <>
            <Grid item md>
              <Typography variant='h5' id='tableTitle' component='div'>
                Характеристики сравниваемых автомобилей
              </Typography>
              <CompareTable userComparedAds={userComparedAds} />
              <Grid container md justify='flex-end' style={{ marginTop: '3%' }}>
                <Button variant='contained' color='secondary' style={{ backgroundColor: '#4CAF50' }} onClick={() => handleExportClick()}>
                  Экспорт в Excel
                </Button>
              </Grid>
              <Grid container md justify='center' style={{ marginTop: '15%' }}>
                <CompareChart userComparedAds={userComparedAds} />
              </Grid>
            </Grid>
          </>
      ) :(
          <Grid item md>
            <div style={{
              display: 'inline-flex',
              verticalAlign: 'text-bottom',
              boxSizing: 'inherit',
              textAlign: 'center',
              alignItems: 'center',
              marginTop:'6%'
            }}>
              Пока у вас нет сравниваемых объявлений <SentimentVeryDissatisfiedIcon fontSize='large' />
            </div>
          </Grid>
      )}
    </Grid>
  );
};

export default CompareAdsTab;
