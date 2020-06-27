import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField, Typography, Button, Grid, Box } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Navbar from "./Navbar";

const useStyles = makeStyles((theme) => ({
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
    width: "400px",
  },
  title: {
    color: "#FFFF7F",
    marginBottom: "2rem",
  },
  button: {
    marginTop: "1rem",
    color: "#FC3A52",
    borderColor: "#DCEDC1",
    fontSize: "1rem",
    fontWeight: "bold",
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "yellow",
    },
    "& label": {
      color: "#C28CAE",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "gray",
      },
      "&:hover fieldset": {
        borderColor: "lightgray",
      },
      "&.Mui-focused fieldset": {
        borderColor: "lightgray",
      },
    },
    marginBottom: "1.1rem",
  },
})(TextField);

const Contacts = () => {
  const classes = useStyles();
  return (
    <Box component="div">
      <Navbar />
      <Grid container justify="center">
        <Box componet="form" className={classes.form}>
          <Typography variant="h5" className={classes.title}>
            Contact me
          </Typography>
          <InputField
            fullWidth={true}
            label="Name"
            xs={6}
            variant="outlined"
            inputProps={{ style: { color: "white" } }}
            margin="dense"
            size="medium"
          />
          <br />
          <InputField
            fullWidth={true}
            label="Email"
            variant="outlined"
            margin="dense"
            size="medium"
            inputProps={{ style: { color: "white" } }}
          />
          <br />
          <InputField
            fullWidth={true}
            inputProps={{ style: { color: "white" } }}
            label="Company or agency name"
            margin="dense"
            size="medium"
            variant="outlined"
          />
          <br />
          <Button
            className={classes.button}
            variant="outlined"
            fullWidth={true}
            endIcon={<SendIcon />}
          >
            Contact Me
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default Contacts;
