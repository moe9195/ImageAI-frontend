import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Grid,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Parameters from "./Parameters";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "60%",
    marginTop: "5rem",
    borderRadius: "0.5rem",
  },
  postbutton: {
    color: "white",
    backgroundColor: "green",
    padding: "0.5rem 1rem 0.5rem 1rem",
    borderRadius: "0.5rem",
    textAlign: "center",
    display: "inline",
  },
  post: {
    backgroundColor: "rgba(200, 240, 200, 0.75)",
    border: "2px solid green",
    margin: "0.5rem",
    borderRadius: "0.25rem",
  },
  getbutton: {
    color: "white",
    backgroundColor: "blue",
    padding: "0.5rem 1rem 0.5rem 1rem",
    borderRadius: "0.5rem",
    textAlign: "center",
    display: "inline",
  },
  get: {
    backgroundColor: "rgba(200, 200, 250, 0.75)",
    border: "2px solid blue",
    margin: "0.5rem",
    borderRadius: "0.25rem",
  },
  method: {
    color: "rgb(4, 10, 19)",
    padding: "0.5rem 1rem 0.5rem 1rem",
    textAlign: "center",
    display: "inline",
    fontWeight: "500",
    fontSize: "1rem",
  },
  description: {
    color: "rgb(4, 10, 19)",
    padding: "0.5rem 0.5rem 0.5rem 0.5rem",

    textAlign: "center",
    display: "inline",
    fontWeight: "400",
    fontSize: "0.75rem",
  },
}));

const postData = [
  { method: "colorize", description: "Colorize a black and white photo" },

  {
    method: "classify",
    description: "Classify content of image for use in auto tagging",
  },
  {
    method: "deep-art",
    description: "Transform image into artwork using transfer learning",
  },
  {
    method: "super-resolution",
    description: "Upscale image by up to 4x without loss in quality",
  },
  { method: "deblur", description: "Fix blurry images by deblurring" },

  { method: "remove-bg", description: "Remove background from an image" },
];

const Reference = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {postData.map((data) => (
        <ExpansionPanel className={classes.post}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Grid container>
              <Grid xs={2}>
                <Typography className={classes.postbutton}>POST</Typography>
              </Grid>
              <Grid xs={4}>
                <Typography className={classes.method}>
                  /{data.method}
                </Typography>
              </Grid>
              <Grid xs={6}>
                <Typography className={classes.description}>
                  {data.description}
                </Typography>
              </Grid>
            </Grid>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Parameters method={data.method} />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
      <ExpansionPanel className={classes.get}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Grid container>
            <Grid xs={2}>
              <Typography className={classes.getbutton}>GET</Typography>
            </Grid>
            <Grid xs={4}>
              <Typography className={classes.method}>/profile</Typography>
            </Grid>
            <Grid xs={6}>
              <Typography className={classes.description}>
                Fetch profile information
              </Typography>
            </Grid>
          </Grid>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Parameters method={"profile"} />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

export default Reference;
