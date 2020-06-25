import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import { makeStyles } from "@material-ui/styles";
import ParticlesBubbling from "./Particles";

const useStyles = makeStyles({
  hiddenScrollBar: { overflow: "hidden" },
  particlesCanvas: {
    position: "absolute",
    top: 65,
    left: 0,
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.hiddenScrollBar}>
      <Navbar />
      <Header />
      <ParticlesBubbling className={classes.particlesCanvas} />
    </div>
  );
};

export default Home;
