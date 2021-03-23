import { makeStyles } from "@material-ui/core/styles";

export const useStylesProjects = makeStyles((theme) => ({
  mainContainer: {
    height: "calc(100% - 150px)",
    margin: "30px 120px",
    [theme.breakpoints.down("md")]: {
      margin: "5rem 0",
    },
  },
  cardContainer: {
    maxWidth: 500,
    margin: "5rem 2rem",
    background: "linear-gradient(45deg, black, #0D41E1)",
    transition: "all 0.3s ease-in",
    "&:hover": {
      transform: "translateY(-3px)",
      boxShadow: "0px 0px 20px 10px rgba(116, 165, 203, 0.25)",
    },
    [theme.breakpoints.down("md")]: {
      margin: "1.3rem 0.5rem",
    },
  },

  cardMedia: {
    height: "300px",
    [theme.breakpoints.down("md")]: {
      height: "150px",
    },
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
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
      textAlign: "center",
    },
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
    [theme.breakpoints.down("md")]: {
      fontSize: "0.8rem",
      height: "150px",
      texlAlign: "center",
    },
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
    justifyContent: "space-around",
    width: "90%",
  },
  tooltip: {
    "& .MuiTooltip-tooltip": {
      padding: 30,
    },
  },
  gitlink: {
    color: "black",
    marginTop: "-4px",
    marginBottom: "-4px",
    "&:hover": {
      color: "white",
    },
  },
  techIcons: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    margin: "1rem 0",
    [theme.breakpoints.down("sm")]: {
      margin: "0.2rem 0",
    },
  },
  techIconImage: {
    maxWidth: "80px",
    maxHeight: "80px",
    borderRadius: "50%",
    boxShadow: "2px 2px 12px 6px rgba(240,240,240,0.4)",
    // transition: 'all 0.3s ease-in',
    "&:hover": {
      animation: "$rotateYAxis 1000ms linear infinite",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "35px",
      maxHeight: "35px",
      boxShadow: "1px 1px 6px 2px rgba(240,240,240,0.4)",
      margin: "0.2rem 0",
    },
  },
  "@keyframes rotateYAxis": {
    "0%": {
      transorm: "rotateY(0deg)",
    },
    "100%": {
      transform: "rotateY(360deg)",
    },
  },
}));
