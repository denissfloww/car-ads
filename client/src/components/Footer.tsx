import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { useFooterStyles } from '../styles/muiStyles';

const Footer = () => {
  const classes = useFooterStyles();
  return (
    <footer className={classes.footer}>
      ©denissfloww 2021–2021 (Тюменская область)
    </footer>
  );
};

export default Footer;
