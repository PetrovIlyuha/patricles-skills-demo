import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import avatar from "../images/avatar.png";
import Typed from "react-typed";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: theme.spacing(3),
    border: "2px solid yellow",
  },
  title: {
    color: "yellow",
  },
  subtitle: {
    color: "lightgreen",
    marginBottom: "3rem",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));
const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar src={avatar} alt="Avatar" className={classes.avatar} />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Ilya Petrov"]} typeSpeed={40} />
      </Typography>
      <br />
      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "Web Enthusiast",
            "Everything that can be written",
            "Must be written in JavaScript",
            "React is in my 💜, but...",
            "Eagerly waiting for Vue 3 🔥",
          ]}
          typeSpeed={40}
          startDelay={600}
          backDelay={600}
          backSpeed={40}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
