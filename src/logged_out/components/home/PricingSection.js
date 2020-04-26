import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  Grid,
  Typography,
  isWidthUp,
  withWidth,
  withStyles,
} from "@material-ui/core";
import PriceCard from "./PriceCard";
import calculateSpacing from "./calculateSpacing";

const styles = (theme) => ({
  containerFix: {
    [theme.breakpoints.down("md")]: {
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    overflow: "hidden",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  cardWrapper: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 340,
    },
  },
  cardWrapperHighlighted: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 360,
    },
  },
});

const PricingSection = (props) => {
  const { width, classes } = props;
  return (
    <div className="lg-p-top" style={{ backgroundColor: "#0e141d" }}>
      <Typography
        variant="h3"
        align="center"
        className="lg-mg-bottom"
        style={{ color: "#00E9F1" }}
      >
        Pricing
      </Typography>
      <div className={classNames("container-fluid", classes.containerFix)}>
        <Grid
          container
          style={{ justifyContent: "center" }}
          spacing={calculateSpacing(width)}
          className={classes.gridContainer}
        >
          <Grid
            item
            xs={12}
            sm={6}
            lg={3}
            className={classes.cardWrapper}
            data-aos="zoom-in-up"
            style={{ color: "white" }}
          >
            <PriceCard
              title="Free"
              pricing={
                <span>
                  $0.00
                  <Typography display="inline"> / month</Typography>
                </span>
              }
              features={[
                "30 Images per month",
                "Unused credits roll over",
                "Unlimited storage for 7 days",
                "Work on all your devices",
                "Upscale up to 12 megapixels",
              ]}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            lg={3}
            className={classes.cardWrapper}
            data-aos="zoom-in-up"
            style={{ color: "white" }}
          >
            <PriceCard
              title="Starter"
              pricing={
                <span>
                  $5.99
                  <Typography display="inline"> / month</Typography>
                </span>
              }
              features={[
                "100 Images per month",
                "Unused credits roll over",
                "Unlimited storage for 30 days",
                "Work on all your devices",
                "Upscale up to 40 megapixels",
              ]}
            />
          </Grid>
          <Grid
            item
            className={classes.cardWrapperHighlighted}
            xs={12}
            sm={6}
            lg={3}
            data-aos="zoom-in-up"
            data-aos-delay="200"
          >
            <PriceCard
              highlighted
              title="Premium"
              pricing={
                <span>
                  $12.99
                  <Typography display="inline"> / month</Typography>
                </span>
              }
              features={[
                "300 Images per month",
                "Everything from starter pack",
                "Live-chat support",
                "Early access to new features",
              ]}
            />
          </Grid>

          <Grid
            item
            className={classes.cardWrapper}
            xs={12}
            sm={6}
            lg={3}
            data-aos="zoom-in-up"
            data-aos-delay={isWidthUp("md", width) ? "600" : "200"}
          >
            <PriceCard
              title="API for Business"
              pricing={
                <span>
                  $99.99
                  <Typography display="inline"> / month</Typography>
                </span>
              }
              features={[
                "Unlimited images",
                "API access with 99.9% uptime",
                "Live-chat support",
                "Early access to new features",
                "No resolution limit",
              ]}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

PricingSection.propTypes = {
  width: PropTypes.string.isRequired,
};

export default withStyles(styles, { withTheme: true })(
  withWidth()(PricingSection)
);
