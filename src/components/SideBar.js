import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import {
  Avatar,
  Divider,
  List,
  Box,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { AssignmentInd, Home, Apps, ContactMail } from "@material-ui/icons";
import avatar from "../images/avatar.png";

// styles
const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: "linear-gradient(to bottom, #0f0c29, #302b63, #24243e)",
    height: "100%",
    fontFamily: "'MuseoModerno', cursive",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
    background: "#0A4B5B",
    border: "2px solid #DFF0EA",
  },
  listItem: {
    color: "whitesmoke",
  },
}));

const menuIconsItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    route: "/",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "CV",
    route: "/cv",
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contacts",
  },
];

export const SideBar = ({ onClick }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box
        onClick={onClick}
        component="div"
        className={classes.menuSliderContainer}
      >
        <Avatar className={classes.avatar} src={avatar} alt="avatar" />
        <Divider />
        <List>
          {menuIconsItems.map((lsItem, key) => (
            <ListItem button key={key} component={Link} to={lsItem.route}>
              <ListItemIcon className={classes.listItem}>
                {lsItem.listIcon}
              </ListItemIcon>
              <ListItemText
                className={classes.listItem}
                primary={lsItem.listText}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </React.Fragment>
  );
};
