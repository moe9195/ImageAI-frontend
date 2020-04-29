import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import CircularProgress from "@material-ui/core/CircularProgress";
import VerticalStepper from "./VerticalStepper";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflowY: "scroll",
    position: "absolute",
    top: "1rem",
  },
  paper: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.lightBlue,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[4],
    padding: theme.spacing(2, 4, 3),
  },
}));

const UploadDialog = ({ open, handleClose, returnedImage, image }) => {
  const [method, setMethod] = React.useState("SuperResolution");

  React.useEffect(() => {}, []);

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

            {returnedImage === null && image === null ? (
              <></>
            ) : returnedImage === null && image !== null ? (
              <img style={{ width: "480px" }} src={image} />
            ) : (
              <img
                style={{ width: "480px" }}
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
    image: state.image,
    returnedImage: state.returnedImage,
  };
};

export default connect(mapStateToProps, null)(UploadDialog);
