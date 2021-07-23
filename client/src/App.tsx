import React from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import Routes from './Router';
import Footer from "./components/Footer";

import {useBodyStyles} from "./styles/muiStyles";

function App() {
    const classes = useBodyStyles(false)();
  return (
          <div className="App">
              <div className={classes.root}>
                  <NavBar />
                  <Routes />
                  <Footer />
              </div>
          </div>
  );
}

export default App;
