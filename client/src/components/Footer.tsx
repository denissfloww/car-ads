import { Button } from "@material-ui/core";
import { Icon32LogoVkColor } from '@vkontakte/icons';
import React from 'react';
import { useFooterStyles } from '../styles/muiStyles';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';

const Footer = () => {
  const classes = useFooterStyles();
  return (
      <footer className={classes.footer}>
        ©denissfloww 2021–2021 <br />denbugackoff21@gmail.com
        <p>
          <Button href="https://github.com/denissfloww/car-ads" target="_blank">
            <GitHubIcon />
          </Button>
          <Button href="https://vk.com/d_bugackoff" target="_blank">
            <Icon32LogoVkColor />
          </Button>
          <Button href="https://mail.google.com/mail/u/0/?fs=1&to=denbugackoff21@gmail.com&tf=cm" target="_blank">
            <MailIcon />
          </Button>
        </p>
      </footer>
    )
};

export default Footer;
