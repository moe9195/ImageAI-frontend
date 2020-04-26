import React from "react";
import PropTypes from "prop-types";
import { Typography, Box, withStyles } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";

const styles = (theme) => ({
  card: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    marginTop: theme.spacing(2),
    border: `3px solid ${theme.palette.primary.dark}`,
    borderRadius: theme.shape.borderRadius * 2,
    backgroundColor: "#040a13",
  },
  cardHightlighted: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    border: `3px solid ${theme.palette.primary.dark}`,
    borderRadius: theme.shape.borderRadius * 2,
    backgroundColor: "#B50057",
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(2),
    },
  },
  title: {
    color: theme.palette.primary.main,
  },
});

const PriceCard = (props) => {
  const { classes, theme, title, pricing, features, highlighted } = props;
  return (
    <div
      className={highlighted ? classes.cardHightlighted : classes.card}
      style={{ borderColor: highlighted ? "#B50057" : "#B50057" }}
    >
      <Box mb={2}>
        <Typography
          variant={highlighted ? "h5" : "h6"}
          className={highlighted ? "text-white" : classes.title}
          style={{ color: highlighted ? "#040a13" : "#B50057" }}
        >
          {title}
        </Typography>
      </Box>
      <Box mb={2}>
        <Typography
          variant={highlighted ? "h3" : "h4"}
          className={highlighted ? "text-white" : null}
          style={{ color: highlighted ? "#040a13" : "#B50057" }}
        >
          {pricing}
        </Typography>
      </Box>
      {features.map((feature, index) => (
        <Box display="flex" alignItems="center" mb={1} key={index}>
          <CheckIcon style={{ color: highlighted ? "#040a13" : "#B50057" }} />
          <Box ml={1}>
            <Typography
              className={highlighted ? "text-white" : null}
              variant={highlighted ? "h6" : "body1"}
              style={{ color: highlighted ? "#040a13" : "#B50057" }}
            >
              {feature}
            </Typography>
          </Box>
        </Box>
      ))}
    </div>
  );
};

PriceCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  pricing: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  highlighted: PropTypes.bool,
};

export default withStyles(styles, { withTheme: true })(PriceCard);
