import React from "react";
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

const CustomLink = withStyles({
  root: {
    background: "red",
    padding: "15px",
    borderRadius: "5px",
    color: "white",
    "&:hover": {
      background: "white",
      color: "red",
    },
  },
})(Link);

const Projects = () => {
  const classes = useStylesProjects();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Grid container justify="center" alignItems="center">
        {/* Project 1 */}
        {projectsList.map((project, key) => (
          <Grid item xs={12} sm={8} md={6} lg={4} key={key}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={project.name}
                  height="250"
                  image={project.image}
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
                  <CustomLink
                    href={project.link}
                    color="secondary"
                    style={{ textDecoration: "none", textAlign: "center" }}
                  >
                    Live Demo
                  </CustomLink>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
