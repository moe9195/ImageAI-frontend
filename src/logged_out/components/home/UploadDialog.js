import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import VerticalStepper from "./VerticalStepper";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.lightBlue,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[4],
    padding: theme.spacing(2, 4, 3),
  },
}));

const UploadDialog = ({ open, handleClose, returnedImage }) => {
  const [method, setMethod] = React.useState("SuperResolution");
  const handleMethodChange = (event) => {
    setMethod(event.target.value);
  };

  const classes = useStyles();
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Select Service</h2>
            <p id="transition-modal-description">
              <VerticalStepper
                method={method}
                handleMethodChange={handleMethodChange}
              />
            </p>
            {returnedImage === null ? (
              <></>
            ) : (
              <img
                width="100%"
                src={"data:image/jpeg;base64, " + returnedImage}
              />
            )}
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    returnedImage: state.returnedImage,
  };
};

export default connect(mapStateToProps, null)(UploadDialog);
