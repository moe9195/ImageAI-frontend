import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, isWidthUp, withWidth } from "@material-ui/core";
import ColorLensIcon from "@material-ui/icons/ColorLens";
import RestoreIcon from "@material-ui/icons/Restore";
import ZoomOutMapIcon from "@material-ui/icons/ZoomOutMap";
import RemoveRedEyeIcon from "@material-ui/icons/RemoveRedEye";
import BlurOffIcon from "@material-ui/icons/BlurOff";
import BrushIcon from "@material-ui/icons/Brush";
import calculateSpacing from "./calculateSpacing";
import FeatureCard from "./FeatureCard";

const iconSize = 30;

const features = [
  {
    color: "#00C853",
    headline: "Image Upscaling",
    text: "Increase your image resolution by up to x8 without loss in quality.",
    icon: <ZoomOutMapIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "0",
  },
  {
    color: "#6200EA",
    headline: "Background removal",
    text: "Automatically remove image background in a few seconds.",
    icon: <RemoveRedEyeIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "200",
  },
  {
    color: "#0091EA",
    headline: "Image Colorization",
    text: "Add color to old family photos and historic images",
    icon: <ColorLensIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "0",
  },
  {
    color: "#d50000",
    headline: "Deep Art",
    text: "Turn your photos into artwork using style transfer algorithms.",
    icon: <BrushIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "200",
  },
  {
    color: "#DD2C00",
    headline: "Image Restoration",
    text: "Restore old or corrupted images automatically and quickly.",
    icon: <RestoreIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "0",
  },
  {
    color: "#64DD17",
    headline: "Deblurring",
    text: "Sharpen blurry images on the fly in a few seconds.",
    icon: <BlurOffIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "200",
  },
];

const FeatureSection = (props) => {
  const { width } = props;
  return (
    <div style={{ backgroundColor: "#0e141d" }}>
      <div className="container-fluid lg-p-top">
        <Typography
          variant="h3"
          align="center"
          className="lg-mg-bottom"
          style={{ color: "#00E9F1" }}
        >
          Features
        </Typography>
        <div className="container-fluid">
          <Grid
            container
            spacing={calculateSpacing(width)}
            style={{ color: "#00E9F1" }}
          >
            {features.map((element) => (
              <Grid
                item
                xs={6}
                md={4}
                data-aos="zoom-in-up"
                data-aos-delay={
                  isWidthUp("md", width) ? element.mdDelay : element.smDelay
                }
                key={element.headline}
              >
                <FeatureCard
                  Icon={element.icon}
                  color={element.color}
                  headline={element.headline}
                  text={element.text}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

FeatureSection.propTypes = {
  width: PropTypes.string.isRequired,
};

export default withWidth()(FeatureSection);
