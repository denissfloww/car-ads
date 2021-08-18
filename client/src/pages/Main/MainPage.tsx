import { Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MainFeaturedPost from "../../components/MainFeaturedPost";
import { useMainPageStyles } from '../../styles/muiStyles';

const mainFeaturedPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
  linkText: 'Continue reading…',
};

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const MainPage = () => {
  const classes = useMainPageStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.notFoundPaper}>
        <MainFeaturedPost post={mainFeaturedPost} />
        <Grid container spacing={5}>

        </Grid>
      </Paper>
    </div>
  );
};

export default MainPage;
