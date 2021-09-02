import { CardContent, Container, Grid, Typography } from '@material-ui/core';
import AnnouncementOutlinedIcon from '@material-ui/icons/AnnouncementOutlined';
import BarChartIcon from '@material-ui/icons/BarChart';
import CancelIcon from '@material-ui/icons/Cancel';
import CloudIcon from '@material-ui/icons/Cloud';
import CodeIcon from '@material-ui/icons/Code';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import ListIcon from '@material-ui/icons/List';
import PostAddIcon from '@material-ui/icons/PostAdd';
import RssFeedOutlinedIcon from '@material-ui/icons/RssFeedOutlined';
import ReportIcon from '@material-ui/icons/Report';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PhotoIcon from '@material-ui/icons/Photo';
import { useMainPageStyles } from "../styles/muiStyles";

const iconSize = 30;
const features = [
  {
    headline: 'Подавайте объявления',
    text: 'Размещение объявления о продаже автомобиля с возможностью выбора марки, модели и т.д',
    icon: <PostAddIcon style={{ fontSize: iconSize }} />,
  },
  {
    headline: 'Просматривайте каталог',
    text: 'Поиск автомобиля, необходимого вам',
    icon: <ListIcon style={{ fontSize: iconSize }} />,
  },
  {
    headline: 'Новости',
    text: 'Интересеные новости из мира авто',
    icon: <RssFeedOutlinedIcon style={{ fontSize: iconSize }} />,
  },
  {
    headline: 'Отзывы',
    text: 'Отдел на реализации',
    icon: <AnnouncementOutlinedIcon style={{ fontSize: iconSize }} />,
  },
  {
    headline: 'Сравнивайте',
    text: 'Возможность сравнения интересующих авто по характеристикам',
    icon: <BarChartIcon style={{ fontSize: iconSize }} />,
  },
  {
    headline: 'Отчёт сравнения',
    text: 'Экспортируйте отчёт сравнения автомобилей в Excel формате ',
    icon: <ReportIcon style={{ fontSize: iconSize }} />,
  },
  {
    headline: 'Авторизация и регистрация',
    text: 'Необходимо для подачи объявлений и полноценном использовании приложения',
    icon: <LockOpenIcon style={{ fontSize: iconSize }} />,
  },
  {
    headline: 'Избранное',
    text: 'Добавляйте объявления в избранное, чтобы следить за изменениями',
    icon: <FavoriteBorderIcon style={{ fontSize: iconSize }} />,
  },
  {
    headline: 'Фото авто',
    text: 'Просматривайте фотографии автомобиля в объявлении для лучшего представления о нём',
    icon: <PhotoIcon style={{ fontSize: iconSize }} />,
  },
];

const FeaturesCards = () => {
  const classes = useMainPageStyles();
  return (
    <>
      <Typography variant='h3' align='center' className='lg-mg-bottom'>
        Возможности
      </Typography>
      <Container className={classes.cardGrid} maxWidth='md'>
        <Grid container spacing={4}>
          {features.map(card => (
            <Grid className={classes.grid} data-aos='fade-up' item key={card.headline} xs={12} sm={6} md={4}>
              <div className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant='h5' component='h2'>
                    {card.icon}
                  </Typography>
                  <Typography gutterBottom variant='h5' component='h2'>
                    {card.headline}
                  </Typography>
                  <Typography color='textSecondary' style={{ fontSize: '11pt' }}>
                    {card.text}
                  </Typography>
                </CardContent>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default FeaturesCards
