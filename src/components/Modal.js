import React from "react";
import ReactDOM from "react-dom";
import { FaWindowClose } from "react-icons/fa";
import { makeStyles } from "@material-ui/core/styles";
import { fadeInSlow } from "../animation-lib";

const useStyles = makeStyles((theme) => ({
  overlay: {
    zIndex: 98,
    position: "fixed",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    display: "flex",
    alignItems: "center",
    borderRadius: "10px",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  modalWindow: {
    zIndex: 99,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    margin: "0 auto",
    width: "80%",
    height: "80%",
    [theme.breakpoints.down('md')]: {
      top: "60%",
      width: "95%",
    }
  },
  modalCloseBtn: {
    position: "absolute",
    top: "-50px",
    right: "0",
    fontSize: "3rem",
    padding: "5px",
    border: "0",
    WebkitAppearance: "none",
    background: "none",
    color: "white",
    cursor: "pointer",
  },
  modalBody: {
    padding: "20px 24px",
    borderRadius: "4px",
    backgroundColor: "black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(45deg, deeppink, blue)",
    [theme.breakpoints.down('md')]: {
      padding: '4px'
    }
  },
  modalImage: {
    width: "80%",
    borderRadius: "10px",
    boxShadow: "3px 5px 14px 6px rgba(0,0,0,0.2)",
    [theme.breakpoints.down("md")]: {
      width: "100%"
    }
  },
}));

const Modal = ({ show, setShow, innerContent }) => {
  const classes = useStyles();
  const content = show && (
    <div
      className={classes.overlay}
      variants={fadeInSlow}
      initial="hidden"
      animate="show"
    >
      <div className={classes.modalWindow}>
        <div
          className={classes.modalCloseBtn}
          type="button"
          onClick={() => setShow({ isActive: false, element: null })}
        >
          <FaWindowClose size={30} />
        </div>
        <div className={classes.modalBody}>
          <img
            className={classes.modalImage}
            src={innerContent.image}
            alt="modal content"
          />
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(content, document.getElementById("modal"));
};

export default Modal;
