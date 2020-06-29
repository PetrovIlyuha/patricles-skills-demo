import { makeStyles } from "@material-ui/core/styles";

export const useStylesNavbar = makeStyles((theme) => ({
  mainMenuFlex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    alignContent: "center",
    fontFamily: "'MuseoModerno', cursive",
  },
  desktopMenu: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginLeft: "20px",
    minWidth: "200px",
    alignItems: "center",
    alignContent: "center",
    fontFamily: "'MuseoModerno', cursive",
  },
}));
