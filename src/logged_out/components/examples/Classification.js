import React, { useState } from "react";
import ReactCompareImage from "react-compare-image";
import { Classification } from "./ImageData";
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
                AUTOMATIC IMAGE CATEGORIZATION
              </Typography>
              <Typography
                className={classes.sm}
                style={{ margin: "2rem 2rem 2rem 2rem", color: "white" }}
              >
                Automatically categorize your image content using our powerful
                API.
              </Typography>

              <Paper className={classes.paper}>
                <Typography
                  className={classes.lg}
                  style={{ marginBottom: "2rem" }}
                >
                  State of the art deep learning algorithm
                </Typography>
                <Typography className={classes.sm}>
                  Using EfficientNet, Google's state of the art image
                  classification neural network, you can classify objects in
                  images with up to 84.5% top-1 accuracy and 98.7% top-5
                  accuracy. Trained on over 300 million images, this neural
                  network is the best of its class.
                  <br></br>
                  <br></br>
                  You can learn more about the algorithm{" "}
                  <a
                    target="_blank"
                    href="https://arxiv.org/pdf/1905.11946.pdf"
                  >
                    here
                  </a>
                  .
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={8}>
              <div
                style={{
                  borderRadius: "1rem",
                  margin: "2rem 3rem 2rem 0rem",
                  backgroundColor: "hidden",
                }}
              >
                <img
                  style={{
                    borderRadius: "1rem",
                    width: "90%",
                  }}
                  src={"data:image/jpeg;base64, " + Classification}
                />
              </div>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid
              item
              xs={6}
              style={{
                margin: "0rem 4rem 0rem 8rem",
              }}
            >
              <pre
                class="prettyprint"
                style={{
                  backgroundColor: "#0E141D",
                  color: "white",
                  borderRadius: ".5rem",
                  padding: "1rem 1rem 1rem 1rem",
                  fontSize: "1rem",
                }}
              >
                response = &nbsp;
                {JSON.stringify(
                  {
                    "0.705": "golden retriever",
                    "0.047": "Labrador retriever",
                    "0.021": "chow, chow chow",
                    "0.011": "Tibetan mastiff",
                    "0.009": "Sussex spaniel",
                  },
                  null,
                  4
                )}
              </pre>
            </Grid>
            <Grid item xs={2}></Grid>
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
                  For Image Organization
                </Typography>
                <Typography className={classes.sm}>
                  Organize your photos automatically based on their categories
                  using our powerful API.
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
                  For E-commerce
                </Typography>
                <Typography className={classes.sm}>
                  Automatically assign tags to your images. Save hundreds of
                  hours of data entry time.
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
                  For Marketing
                </Typography>
                <Typography className={classes.sm}>
                  Extract useful information from visuals shared online to make
                  better marketing decisions for your company.
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
