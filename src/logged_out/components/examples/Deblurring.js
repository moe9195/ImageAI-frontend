import React from "react";
import ReactCompareImage from "react-compare-image";
import { DeblurBefore, DeblurAfter } from "./ImageData";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import smoothScrollTop from "../../../shared/functions/smoothScrollTop";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background:
      "linear-gradient(45deg, rgba(2,0,36,1) 0%, rgba(65,67,111,1) 0%, rgba(25,25,154,1) 0%, rgba(0,212,255,1) 100%)",
    borderRadius: "0.5rem",
  },
  extraLargeButtonLabel: {
    fontSize: theme.typography.body1.fontSize,
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.h6.fontSize,
    },
  },
  extraLargeButton: {
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    background: "#F3F4FF",
    color: "black",
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
  paper: {
    padding: theme.spacing(2),
    margin: "2rem 2rem 2rem 2rem",
    background: "#F3F4FF",
    color: "black",
  },
  button: {
    margin: "2rem 2rem 2rem 2rem",
  },
  usecase: {
    padding: theme.spacing(1),
    margin: "0.5rem 0.5rem 0.5rem 0.5rem",
    backgroundColor: "transparent",
    color: "white",
  },
  lg: {
    fontSize: "2rem",
  },
  sm: {
    fontSize: "1rem",
    lineHeight: "1.6",
  },
  md: {
    fontSize: "1.5rem",
  },
}));

const Colorization = () => {
  React.useEffect(() => {
    smoothScrollTop();
  }, []);

  const classes = useStyles();

  return (
    <div
      className="container-fluid lg-p-top"
      style={{
        marginBottom: "5rem",
        backgroundColor: "#0E141D",
      }}
    >
      <Paper style={{ borderRadius: "0.5rem" }}>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Typography
                className={classes.lg}
                style={{ margin: "2rem 2rem 2rem 2rem", color: "white" }}
              >
                FIX BLURRY IMAGES
              </Typography>
              <Typography
                className={classes.sm}
                style={{ margin: "2rem 2rem 2rem 2rem", color: "white" }}
              >
                Remove blurring and restore images, automatically and quickly.
              </Typography>

              <Paper className={classes.paper}>
                <Typography
                  className={classes.lg}
                  style={{ marginBottom: "2rem" }}
                >
                  State of the art deep learning algorithm
                </Typography>
                <Typography className={classes.sm}>
                  Using Generative Adversarial Networks, you can now use our
                  trained models to fix blurry images instantly. Our model has
                  been trained on thousands of GoPRO images obtained from the
                  massive DeepDeblur dataset.<br></br>
                  <br></br>
                  You can learn more about the algorithm{" "}
                  <a
                    target="_blank"
                    href="https://arxiv.org/pdf/1711.07064.pdf"
                    rel="noopener noreferrer"
                  >
                    here
                  </a>
                  .
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={8}>
              <Paper
                style={{ borderRadius: "1rem", margin: "2rem 3rem 2rem 0rem" }}
              >
                {" "}
                <ReactCompareImage
                  leftImageCss={{ borderRadius: "1rem" }}
                  rightImageCss={{ borderRadius: "1rem" }}
                  leftImage={"data:image/jpeg;base64, " + DeblurBefore}
                  rightImage={"data:image/jpeg;base64, " + DeblurAfter}
                />
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.button}>
                {" "}
                <Button
                  variant="contained"
                  fullWidth
                  className={classes.extraLargeButton}
                  classes={{ label: classes.extraLargeButtonLabel }}
                >
                  <Typography style={{ fontSize: "1rem" }}>
                    {" "}
                    check out our api
                  </Typography>
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <div className={classes.usecase}>
                {" "}
                <Typography
                  className={classes.md}
                  style={{ marginBottom: "1rem" }}
                >
                  For image restoration
                </Typography>
                <Typography className={classes.sm}>
                  Instantly restore blurry images in just a few seconds.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className={classes.usecase}>
                {" "}
                <Typography
                  className={classes.md}
                  style={{ marginBottom: "1rem" }}
                >
                  For facial recognition
                </Typography>
                <Typography className={classes.sm}>
                  Use our deblurring algorithm to pre-process your photos to
                  make facial recognition easier.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className={classes.usecase}>
                {" "}
                <Typography
                  className={classes.md}
                  style={{ marginBottom: "1rem" }}
                >
                  For text recognition
                </Typography>
                <Typography className={classes.sm}>
                  Make it easier to scan and read photos of blurry text by using
                  our algorithm.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </Paper>
    </div>
  );
};

export default Colorization;
