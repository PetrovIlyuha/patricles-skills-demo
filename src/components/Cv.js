import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import Navbar from "./Navbar";
import ParticlesBubbling from "./Particles";
import { motion } from "framer-motion";
import { fadeInWhileRotating } from "../animation-lib";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background:
      "linear-gradient(45deg, #000850 0%, #000320 100%), radial-gradient(100% 225% at 100% 0%, #FF6928 0%, #000000 100%), linear-gradient(225deg, #FF7A00 0%, #000000 100%), linear-gradient(135deg, #CDFFEB 10%, #CDFFEB 35%, #009F9D 35%, #009F9D 60%, #07456F 60%, #07456F 67%, #0F0A3C 67%, #0F0A3C 100%)",
    backgroundBlendMode: "screen, overlay, hard-light, normal",
    height: "100%",
    marginTop: "70px",
    marginBottom: '70px'
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    heigth: "80vh",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid #FFFF7F",
    borderTopRightRadius: "20px",
    borderBottomRightRadius: "20px",
    borderTopLeftRadius: "20px",
    borderBottomLeftRadius: "20px",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "#FFFF7F #FFFF7F transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "#FFFF7F",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent #FFFF7F #FFFF7F",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    background: "#FC3A52",
    color: "white",
    lineHeight: 1,
    padding: "0.5rem 0 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "#FFFF7F",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "whitesmoke",
    padding: "0",
    textTransform: "uppercase",
  },
}));

const Cv = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <motion.div
        variants={fadeInWhileRotating}
        initial="hidden"
        animate="show"
      >
        <Box component="header" className={classes.mainContainer}>
          <Typography variant="h4" align="center" className={classes.heading}>
            IT related Working Experience
          </Typography>
          <Box component="div" className={classes.timeLine}>
            <Typography
              variant="h2"
              className={`${classes.timeLineYear} ${classes.timeLineItem}`}
            >
              2018
            </Typography>
            <Box component="div" className={classes.timeLineItem}>
              <Typography
                variant="h5"
                align="center"
                className={classes.subHeading}
              >
                Started to Learn Modern Front-End Stack
              </Typography>
              <Typography
                variant="body1"
                align="center"
                style={{ color: "lightgreen" }}
              >
                Building Core Skills in React, Vue, State Management (Redux,
                MobX, VueX, Redux-Saga)
              </Typography>
              <Typography
                variant="subtitle1"
                align="center"
                style={{ color: "tan" }}
              >
                Building portfolio and skill-set as well as working in
                "CyberLight" as a Front-end engineer full-time
              </Typography>
            </Box>
            {/* Third Entry */}
            <Typography
              variant="h2"
              className={`${classes.timeLineYear} ${classes.timeLineItem}`}
            >
              2019
            </Typography>
            <Box component="div" className={classes.timeLineItem}>
              <Typography
                variant="h5"
                align="center"
                className={classes.subHeading}
              >
                Systems Administrator @
              </Typography>
              <Typography
                variant="body1"
                align="center"
                style={{ color: "lightgreen" }}
              >
                SIGNIA LLC
              </Typography>
              <Typography
                variant="subtitle1"
                align="center"
                style={{ color: "tan" }}
              >
                Full IT Support for Mass Consumption Retail + lot's of spare
                time to dedicate myself to deep learning of React, Vue and
                Angular as well as NodeJS tooling and platform
              </Typography>
            </Box>
          </Box>
        </Box>
      </motion.div>
      <ParticlesBubbling />
    </>
  );
};

export default Cv;
