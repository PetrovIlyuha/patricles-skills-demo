import React, { useState } from "react";
import MobileRightMenuSlider from "@material-ui/core/Drawer";
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
} from "@material-ui/core";
import ClearAllIcon from "@material-ui/icons/ClearAll";
import CloseIcon from "@material-ui/icons/Close";
import Logo from "../images/main_logo.png";
import { SideBar } from "./SideBar";

const Navbar = () => {
  const [state, setState] = useState({
    right: false,
  });

  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };

  const sideList = (slider) => (
    <SideBar onClick={toggleSlider(slider, false)} />
  );
  const menuIconDiff = state.right;
  return (
    <>
      <Box component="nav">
        <AppBar position="static" style={{ background: "rgb(65, 5, 32)" }}>
          <Toolbar>
            <IconButton onClick={toggleSlider("right", true)}>
              {menuIconDiff ? (
                <CloseIcon style={{ color: "yellow" }} />
              ) : (
                <ClearAllIcon style={{ color: "yellow" }} />
              )}
            </IconButton>
            <img src={Logo} alt="logo" style={{ width: 100, height: 55 }} />
            <MobileRightMenuSlider
              anchor="right"
              open={state.right}
              onClose={toggleSlider("right", false)}
            >
              {sideList("right")}
            </MobileRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
