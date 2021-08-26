import { MuiThemeProvider } from "@material-ui/core";
import React, {useEffect} from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Routes from './Router';
import Footer from './components/Footer';
import { theme } from "./styles/theme";
import { useBodyStyles } from './styles/muiStyles';
import {useDispatch} from "react-redux";
import {autoLogin} from "./redux/slices/authSlice";

function App() {
  const classes = useBodyStyles(false)();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(autoLogin());
  }, []);

  return (
    <div className='App'>
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <NavBar />
          <Routes />
          <Footer />
        </div>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
