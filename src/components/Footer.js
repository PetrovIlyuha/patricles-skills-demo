import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "@material-ui/core";
import {
  BottomNavigation,
  BottomNavigationAction,
  Typography,
  Grid,
  AppBar,
} from "@material-ui/core";
import Facebook from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
import Instagram from "@material-ui/icons/Instagram";

const useStyles = makeStyles({
  root: {
    "& .MuiBottomNavigationAction-root": {
      minWidth: 0,
      maxWidth: "100vw",
      color: "#293462",
    },
    "& .MuiSvgIcon-root": {
      fill: "#F3F9D2",
      transition: "transform 0.4s ease-in",
      "&:hover": {
        fill: "yellow",
        transform: "scale(1.1)",
      },
    },
  },
  footerAppBar: {
    top: "auto",
    bottom: 0,
    background: "#0E2431",
  },
  navigation: {
    display: "flex",
    flexDirection: "row",
    background: "#0E2431",
  },
  navActionFB: {
    padding: 0,
    color: "#F3F9D2",
    background: "#112F91",
    paddingBottom: "15px",
  },
  navActionTwitter: {
    padding: 0,
    color: "#F3F9D2",
    background: "#69140E",
    paddingBottom: "15px",
  },
  navActionInsta: {
    padding: 0,
    color: "#F3F9D2",
    background: "#001C55",
    paddingBottom: "15px",
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.footerAppBar}>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} sm={8} md={6} lg={6}>
          <BottomNavigation className={classes.navigation} width="auto">
            <BottomNavigationAction
              component={Link}
              to="https://web.facebook.com/Neurolinkstamp"
              className={`${classes.root} + ${classes.navActionFB}`}
              icon={<Facebook />}
            />

            <BottomNavigationAction
              component={Link}
              to="https://twitter.com/dnamix1"
              className={`${classes.root} + ${classes.navActionTwitter}`}
              icon={<Twitter />}
            />

            <BottomNavigationAction
              component={Link}
              to="https://www.instagram.com/chelovekilya/"
              className={`${classes.root} + ${classes.navActionInsta}`}
              icon={<Instagram />}
            />
          </BottomNavigation>
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={6}>
          <Typography
            variant="subtitle2"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#F3F9D2",
              margin: "10px 0 4px 0",
            }}
          >
            Get Personal &copy; Portfolio 2020
          </Typography>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Footer;
