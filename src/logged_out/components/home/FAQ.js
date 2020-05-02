import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import Typography from "@material-ui/core/Typography";

const ExpansionPanel = withStyles({
  root: {
    border: "hidden",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: "#0E141D",
    border: "hidden",
    margin: 0,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "0",
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails);

const FAQ = () => {
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div style={{ backgroundColor: "#0E141D" }}>
      <div
        style={{
          backgroundColor: "#0E141D",
          margin: "0rem 15rem 0rem 25rem",
        }}
      >
        {" "}
        <Typography
          style={{ fontSize: "3rem", color: "#00E9F1", paddingLeft: "0.25rem" }}
        >
          FAQ
        </Typography>
        <ExpansionPanel
          square
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          style={{ color: "#00E9F1" }}
        >
          <ExpansionPanelSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
            style={{ paddingLeft: "0rem" }}
          >
            <ArrowRightIcon />

            <Typography>How does ImageAI work?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={{ backgroundColor: "#0E141D" }}>
            <Typography>
              ImageAI uses cutting edge deep learning technologies to deliver
              state of the art results. Our models are based on Convolutional
              Neural Networks, which are able to extract useful features and
              patterns from images, similar to how our brain functions. Using
              Generative Adversarial Networks, we are able to reconstruct images
              to perform complex tasks such as deblurring and colorization. Our
              neural networks are trained on a large dataset of images, so it
              learns typical features of physical objects. After the network
              recognises these features, it is able to make accurate predictions
              in just a few seconds.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          square
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          style={{ color: "#00E9F1" }}
        >
          <ExpansionPanelSummary
            aria-controls="panel2d-content"
            id="panel2d-header"
            style={{ paddingLeft: "0rem" }}
          >
            {" "}
            <ArrowRightIcon />
            <Typography>What is the maximum picture limit</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={{ backgroundColor: "#0E141D" }}>
            <Typography>
              For free users, we set the limit to 30 images per month. Moreover,
              images are limited to 5 Megapixels and 5 Megabytes for every photo
              uploaded. ImageAI uses state of the art algorithms which are
              extremely resource hungry. These limits are increased for our paid
              users.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          square
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
          style={{ color: "#00E9F1" }}
        >
          <ExpansionPanelSummary
            aria-controls="panel3d-content"
            id="panel3d-header"
            style={{ paddingLeft: "0rem" }}
          >
            {" "}
            <ArrowRightIcon />
            <Typography>What format are images returned in?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={{ backgroundColor: "#0E141D" }}>
            <Typography>
              All images are returned in Base64 format. This allows for them to
              be easily rendered onto websites using html.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          square
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
          style={{ color: "#00E9F1" }}
        >
          <ExpansionPanelSummary
            aria-controls="panel4d-content"
            id="panel4d-header"
            style={{ paddingLeft: "0rem" }}
          >
            {" "}
            <ArrowRightIcon />
            <Typography>Do you support bulk processing?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={{ backgroundColor: "#0E141D" }}>
            <Typography>
              By using our API, you can process hundreds of images. Drop us a
              message and we can guide you on how to set it up!
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          square
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
          style={{ color: "#00E9F1" }}
        >
          <ExpansionPanelSummary
            aria-controls="panel5d-content"
            id="panel5d-header"
            style={{ paddingLeft: "0rem" }}
          >
            {" "}
            <ArrowRightIcon />
            <Typography>What if I have more questions?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={{ backgroundColor: "#0E141D" }}>
            <Typography>
              No problem! Just send us a message using the message form at the
              footer or drop us an email at welcome@imageai.io
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    </div>
  );
};

export default FAQ;
