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
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.',
    icon: <AnnouncementOutlinedIcon style={{ fontSize: iconSize }} />,
  },
  {
    headline: 'Feature 5',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.',
    icon: <BarChartIcon style={{ fontSize: iconSize }} />,
  },
  {
    headline: 'Feature 6',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.',
    icon: <HeadsetMicIcon style={{ fontSize: iconSize }} />,
  },
  {
    headline: 'Feature 7',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.',
    icon: <CloudIcon style={{ fontSize: iconSize }} />,
  },
  {
    headline: 'Feature 8',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.',
    icon: <CodeIcon style={{ fontSize: iconSize }} />,
  },
  {
    headline: 'Feature 9',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.',
    icon: <CancelIcon style={{ fontSize: iconSize }} />,
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
