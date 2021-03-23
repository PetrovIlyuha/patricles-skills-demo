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
} from "@material-ui/core";
import Navbar from "./Navbar";
import { useStylesProjects } from "./projectsStyles";
import { projectsList } from "./projectsDB";
import { motion } from "framer-motion";
import { fadeInSlow } from "../animation-lib";
import Modal from "./Modal";

const CustomLink = withStyles({
  root: {
    background: "#e9c46a",
    padding: "15px",
    borderRadius: "5px",
    fontWeight: "bold",
    color: "white",
    transition: "all 0.3s ease-in",
    "&:hover": {
      background: "#BD3658",
      transform: "translateY(-2px)",
      boxShadow: "2px 4px 8px rgba(0,0,0,0.3)",
      color: "#FDF1CB",
    },
  },
})(Link);

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
                  <CardMedia
                    component="img"
                    alt={project.name}
                    className={classes.cardMedia}
                    image={project.image}
                    onClick={() =>
                      setShowScreenshot({
                        isActive: true,
                        element: project.image,
                      })
                    }
                  />
                  <CardContent>
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
                        color="secondary"
                        target="_blank"
                        style={{ textDecoration: "none", textAlign: "center" }}
                      >
                        Live Demo
                      </CustomLink>
                    ) : (
                      <div style={{ padding: 25 }} />
                    )}
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
