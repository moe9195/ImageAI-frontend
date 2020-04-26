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

            <Typography>First Question</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={{ backgroundColor: "#0E141D" }}>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
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
            <Typography>Second Question</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={{ backgroundColor: "#0E141D" }}>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
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
            <Typography>Third Question</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={{ backgroundColor: "#0E141D" }}>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    </div>
  );
};

export default FAQ;
