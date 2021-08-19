import {CardContent, Container, Grid, Paper, Typography, Card} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect } from "react";
import FeaturesCards from "../../components/FeaturesCards";
import MainFeaturedPost from "../../components/MainFeaturedPost";
import { useMainPageStyles } from '../../styles/muiStyles';
import CodeIcon from "@material-ui/icons/Code";
import BarChartIcon from "@material-ui/icons/BarChart";
import HeadsetMicIcon from "@material-ui/icons/HeadsetMic";
import CloudIcon from "@material-ui/icons/Cloud";
import CancelIcon from "@material-ui/icons/Cancel";
import PostAddIcon from '@material-ui/icons/PostAdd';
import ListIcon from '@material-ui/icons/List';
import AnnouncementOutlinedIcon from '@material-ui/icons/AnnouncementOutlined';
import RssFeedOutlinedIcon from '@material-ui/icons/RssFeedOutlined';
import Aos from "aos"
import "aos/dist/aos.css"

const mainFeaturedPost = {
  title: 'Car-ads',
  description:
    "Car-ads – самый популярный в России ресурс об автомобилях. На этом сайте вы найдете: самую большую базу объявлений о продаже новых и подержанных машин, шин, дисков, самые подробные каталоги моделей, самые \"горячие\" конференции для автолюбителей, самые объективные голосования и конкурсы, самые актуальные и полезные сервисы, самые искренние отзывы автовладельцев и многое-многое другое.",
  image: 'https://www.avtorinok.ru/photo/pics/porsche/911/167913.jpg',
  imgText: 'main image description',
  linkText: 'Continue reading…',
};




const MainPage = () => {
  const classes = useMainPageStyles();
  useEffect(() => {
    Aos.init({duration: 2000})
  }, []);
  return (
    <div className={classes.root}>
      <Paper className={classes.mainPagePaper}>
        <MainFeaturedPost post={mainFeaturedPost} />
          <div className="container-fluid lg-p-top">
           <FeaturesCards />
          </div>
      </Paper>
    </div>
  );
};


export default MainPage;
