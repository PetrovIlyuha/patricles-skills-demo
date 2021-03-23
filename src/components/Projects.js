import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Box,
  Card,
  Grid,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Link,
  Tooltip,
} from "@material-ui/core";
import Navbar from "./Navbar";
import { useStylesProjects } from "./projectsStyles";
import { projectsList } from "./projectsDB";
import { motion } from "framer-motion";
import { fadeInSlow } from "../animation-lib";
import Modal from "./Modal";
import { AiOutlineGithub } from "react-icons/ai";

const CustomLink = withStyles((theme) => ({
  root: {
    background: "#e9c46a",
    padding: "15px",
    borderRadius: "5px",
    fontWeight: "bold",
    fontSize: "1.4rem",
    color: "black",
    transition: "all 0.14s ease-in",
    [theme.breakpoints.down("sm")]: {
      padding: "15px 10px",
      fontSize: '0.8rem'
    },
    "&:hover": {
      background: "#BD3658",
      transform: "translateY(-2px)",
      boxShadow: "2px 4px 8px rgba(0,0,0,0.3)",
      color: "#FDF1CB",
    },
  },
}))(Link);

const Projects = () => {
  const classes = useStylesProjects();
  const [showScreenshot, setShowScreenshot] = useState({
    isActive: false,
    element: null,
  });
  const { isActive, element } = showScreenshot;
  console.log(isActive, element);
  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <motion.div variants={fadeInSlow} initial="hidden" animate="show">
        <Grid container justify="center" alignItems="center">
          {/* Project 1 */}
          {projectsList.map((project, key) => (
            <Grid item xs={6} sm={6} md={6} lg={4} key={key}>
              <Card className={classes.cardContainer}>
                <CardActionArea>
                  <Tooltip
                    className={classes.tooltip}
                    placement="top-end"
                    title="Click or Tap to enlarge an image"
                  >
                    <CardMedia
                      component="img"
                      alt={project.name}
                      className={classes.cardMedia}
                      image={project.image}
                      onClick={() =>
                        setShowScreenshot({
                          isActive: true,
                          element: project,
                        })
                      }
                    />
                  </Tooltip>
                  <CardContent>
                    <div className={classes.techIcons}>
                      {project.techIcons.map((icon, idx) => (
                        <img src={icon} className={classes.techIconImage} alt={`${project.name}'s technologies being used`} />
                      ))}
                    </div>
                    <Typography
                      gutterBottom
                      variant="h5"
                      className={classes.title}
                    >
                      {project.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      className={classes.description}
                    >
                      {project.description}
                    </Typography>
                  </CardContent>
                  <CardActions className={classes.linkFlexBox}>
                    {project.link !== "" ? (
                      <CustomLink
                        href={project.link}
                        target="_blank"
                        style={{ textDecoration: "none", textAlign: "center" }}
                      >
                        Live Demo
                      </CustomLink>
                    ) : (
                      <div style={{ padding: 25 }} />
                    )}
                    <CustomLink
                      href={project.git}
                      target="_blank"
                      style={{ textDecoration: "none", textAlign: "center" }}
                    >
                      <AiOutlineGithub size={30} className={classes.gitlink} />
                    </CustomLink>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </motion.div>
      {isActive && (
        <Modal
          show={isActive}
          setShow={setShowScreenshot}
          innerContent={element}
        />
      )}
    </Box>
  );
};

export default Projects;
