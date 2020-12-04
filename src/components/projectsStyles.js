import { makeStyles } from "@material-ui/core/styles";

export const useStylesProjects = makeStyles({
  mainContainer: {
    height: "calc(100% - 150px)",
    margin: "30px 120px",
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
