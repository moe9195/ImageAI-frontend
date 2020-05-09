import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";
import Request from "./Request";
import Reference from "./Reference";
import smoothScrollTop from "../../../shared/functions/smoothScrollTop";

const useStyles = makeStyles((theme) => ({
  main: {
    textAlign: "center",
    marginBottom: "5rem",
    backgroundColor: "#0E141D",
  },
  title: {
    fontSize: "3rem",
    color: "#00CCD3",
    textAlign: "center",
    fontWeight: "550",
    padding: "2rem 0rem 2rem 0rem",
  },
  email: {
    fontSize: "1rem",
    color: "#00CCD3",
    textAlign: "center",
    fontWeight: "450",
  },
  features: {
    color: "#00CCD3",
  },
  photo: {
    display: "inline",
  },
  container: {
    margin: "6rem 0rem 2rem 0rem",
    paddingLeft: "8rem",
  },
}));

const Documentation = () => {
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
      <Typography className={classes.title}>
        &nbsp; &nbsp; Edit any image with 1 API call
      </Typography>
      <Request />
      <Grid container className={classes.container}>
        <Grid item lg={6} xs={12}>
          <div className={classes.photo}>
            <img
              src="https://raw.githubusercontent.com/moe9195/Capstone-React/master/public/imageAI-diagram.png"
              alt="diagram"
            />
          </div>
        </Grid>
        <Grid item lg={6} xs={12}>
          <div className={classes.features}>
            <Typography style={{ fontSize: "3rem", fontWeight: "500" }}>
              Easy to integrate
            </Typography>
            <Typography>
              Our RESTful API is simple, fast, and with various options
            </Typography>
            <ul class="a" style={{ fontSize: "1rem" }}>
              <li>
                <text style={{ fontWeight: "600" }}>Source image: </text>Direct
                upload or URL reference
              </li>
              <li>
                <text style={{ fontWeight: "600" }}>Result image: </text>Image
                file in Base64 format, or JSON object for classification
              </li>
              <li>
                <text style={{ fontWeight: "600" }}>Output format: </text>Choose
                from JPEG or PNG
              </li>
              <li>
                <text style={{ fontWeight: "600" }}>Format: </text>Choose from
                JPEG or PNG
              </li>
              <li>
                <text style={{ fontWeight: "600" }}>Style for Deep Art: </text>
                Choose from six styles <br /> (la_muse, rain_princess, scream,
                udnie, wave, wreck)
              </li>
            </ul>
          </div>
        </Grid>
      </Grid>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Reference />
      </div>
    </div>
  );
};

export default Documentation;
