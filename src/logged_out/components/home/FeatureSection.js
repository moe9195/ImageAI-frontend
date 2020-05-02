import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Grid, Typography, isWidthUp, withWidth } from "@material-ui/core";
import ColorLensIcon from "@material-ui/icons/ColorLens";
import CategoryIcon from "@material-ui/icons/Category";
import ZoomOutMapIcon from "@material-ui/icons/ZoomOutMap";
import RemoveRedEyeIcon from "@material-ui/icons/RemoveRedEye";
import BlurOffIcon from "@material-ui/icons/BlurOff";
import BrushIcon from "@material-ui/icons/Brush";
import calculateSpacing from "./calculateSpacing";
import FeatureCard from "./FeatureCard";

const iconSize = 30;

const features = [
  {
    color: "#0091EA",
    link: "/colorize",
    headline: "Image Colorization",
    text:
      "Add color to old family photos and historic images automatically and instantly",
    icon: <ColorLensIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "0",
  },
  {
    color: "#d50000",
    link: "/deepart",
    headline: "Deep Art",
    text:
      "Turn any of your photos into artwork using style transfer algorithms.",
    icon: <BrushIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "200",
  },
  {
    color: "#00C853",
    link: "/superresolution",
    headline: "Image Upscaling",
    text: "Increase your image resolution by up to x4 without loss in quality.",
    icon: <ZoomOutMapIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "0",
  },
  {
    color: "#DD2C00",
    link: "/classification",
    headline: "Image Recognition",
    text:
      "Automatically classify the contents of your images using state of the art algorithms",
    icon: <CategoryIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "0",
  },
  {
    color: "#64DD17",
    link: "/deblur",
    headline: "Deblurring",
    text:
      "Sharpen blurry and unclear images on the fly in a few seconds with deep learning.",
    icon: <BlurOffIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "200",
  },
  {
    color: "#6200EA",
    link: "/removebg",
    headline: "Background removal",
    text: "Automatically remove image background in a few seconds.",
    icon: <RemoveRedEyeIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
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
                <Link to={element.link}>Learn More</Link>
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
