import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
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
import TeahouseDemo from "../images/teahouse_demo.gif";
import Insta from "../images/insta_demo.gif";
import NightWatcher from "../images/movies.gif";

const useStyles = makeStyles({
  mainContainer: {
    height: "100%",
  },
  cardContainer: {
    maxWidth: 500,
    margin: "5rem 2rem",
  },
  title: {
    background:
      "linear-gradient(125deg, #ECFCFF 0%, #ECFCFF 40%, #B2FCFF calc(40% + 1px), #B2FCFF 60%, #5EDFFF calc(60% + 1px), #5EDFFF 72%, #3E64FF calc(72% + 1px), #3E64FF 100%)",
    color: "#861657",
    height: "60px",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    border: "2px solid #861657",
  },
  description: {
    background:
      "radial-gradient(100% 225% at 100% 0%, #FAFF00 0%, #000000 100%), linear-gradient(235deg, #DB00FF 0%, #000000 100%), linear-gradient(45deg, #241E92 0%, #241E92 40%, #5432D3 40%, #5432D3 50%, #7B6CF6 50%, #7B6CF6 70%, #E5A5FF 70%, #E5A5FF 100%), linear-gradient(180deg, #01024E 0%, #01024E 43%, #543864 43%, #543864 62%, #8B4367 62%, #8B4367 80%, #FF6464 80%, #FF6464 100%)",
    backgroundBlendMode: "overlay, hard-light, overlay, normal",
    color: "#FFD3B6",
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    padding: "10px 20px",
    alignItems: "center",
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px",
    border: "2px solid #DCEDC1",
  },
  link: {
    textDecoration: "none",
    backround: "black",
    color: "white",
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  linkFlexBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});

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

const projectsList = [
  {
    name: "Tea House",
    description:
      "E-commerce Single-Page Application powered by React, FormSpree and Contentful CMS",
    image: TeahouseDemo,
    link: "https://zenteahouse.netlify.app/",
  },
  {
    name: "Instagram Clone",
    description:
      "Instagram Clone with React, Material UI, Cloudinary - Static Files CDN, GraphQL Apollo on the FrontEnd, Hasura Backend, GraphQL schema language for serving requests to Hasura DB",
    image: Insta,
    link: "https://instaclone-4557lfzzp.now.sh/",
  },
  {
    name: "NightWatcher (Movie Selection)",
    description:
      "Movie Selection and Quick Assessment Guide powered by React, Styled-Components and MovieDB",
    image: NightWatcher,
    link: "https://nightwatcher.netlify.app/",
  },
];

const Projects = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Grid container justify="center" alignItems="center">
        {/* Project 1 */}
        {projectsList.map((project, key) => (
          <Grid item xs={12} sm={8} md={6} lg={4}>
            <Card className={classes.cardContainer} key={key}>
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
