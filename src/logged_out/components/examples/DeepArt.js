import React, { useState } from "react";
import ReactCompareImage from "react-compare-image";
import { DeepArtBefore, DeepArtAfter } from "./ImageData";
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

const DeepArt = () => {
  const classes = useStyles();
  React.useEffect(() => {
    smoothScrollTop();
  }, []);

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
                TURN YOUR PHOTOS INTO ART
              </Typography>
              <Typography
                className={classes.sm}
                style={{ margin: "2rem 2rem 2rem 2rem", color: "white" }}
              >
                Choose from one of 6 famous artists and repaint your photo into
                their style. In just a few seconds, you can create artwork from
                your normal images!
              </Typography>

              <Paper className={classes.paper}>
                <Typography
                  className={classes.lg}
                  style={{ marginBottom: "2rem" }}
                >
                  State of the art deep learning algorithm
                </Typography>
                <Typography className={classes.sm}>
                  Using convolutional neural networks, you can now turn any of
                  your photos into artwork inspired by famous artists, in just a
                  few seconds! Choose from one of six styles of famous painters
                  and automatically change your image to a piece of art.
                  <br></br>
                  <br></br>
                  You can learn more about the algorithm{" "}
                  <a
                    target="_blank"
                    href="https://arxiv.org/pdf/1508.06576.pdf"
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
                  leftImage={DeepArtBefore}
                  rightImage={"data:image/jpeg;base64, " + DeepArtAfter}
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
                  For printing
                </Typography>
                <Typography className={classes.sm}>
                  From photobooks to posters. Turn your photos into art.
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
                  For e-commerce
                </Typography>
                <Typography className={classes.sm}>
                  Stylise your products to create unique designs.
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
                  For artists
                </Typography>
                <Typography className={classes.sm}>
                  Turn your photos into art and get some design idea for your
                  next artwork.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </Paper>
    </div>
  );
};

export default DeepArt;
