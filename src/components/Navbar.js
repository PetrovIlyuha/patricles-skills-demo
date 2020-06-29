import React, { useState } from "react";
import MobileRightMenuSlider from "@material-ui/core/Drawer";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
} from "@material-ui/core";
import ClearAllIcon from "@material-ui/icons/ClearAll";
import CloseIcon from "@material-ui/icons/Close";
import Logo from "../images/main_logo.png";
import { SideBar } from "./SideBar";
import { useStylesNavbar } from "./navbarStyles";
import Footer from "./Footer";

const Navbar = () => {
  const [state, setState] = useState({
    right: false,
  });
  const classes = useStylesNavbar();

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
        <AppBar position="fixed" style={{ background: "rgb(65, 5, 32)" }}>
          <Toolbar>
            <IconButton onClick={toggleSlider("right", true)}>
              {menuIconDiff ? (
                <CloseIcon style={{ color: "yellow" }} />
              ) : (
                <ClearAllIcon style={{ color: "yellow" }} />
              )}
            </IconButton>
            <div className={classes.mainMenuFlex}>
              <NavLink to="/">
                <img
                  src={Logo}
                  alt="logo"
                  style={{ width: 100, height: 55, marginTop: "10px" }}
                />
              </NavLink>
              <div className={classes.desktopMenu}>
                <NavLink
                  to="/cv"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <Typography>CV</Typography>
                </NavLink>
                <NavLink
                  to="/portfolio"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <Typography>Projects</Typography>
                </NavLink>
                <NavLink
                  to="/contacts"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <Typography>Contact Me</Typography>
                </NavLink>
              </div>
            </div>
            <MobileRightMenuSlider
              anchor="right"
              open={state.right}
              onClose={toggleSlider("right", false)}
            >
              {sideList("right")}
            </MobileRightMenuSlider>
          </Toolbar>
        </AppBar>

        <Footer />
      </Box>
    </>
  );
};

export default Navbar;
