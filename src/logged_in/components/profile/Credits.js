import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Button, Popover } from "@material-ui/core";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

const nextMonthDate = () => {
  let today = new Date();
  today.setDate(today.getDate() + 30);
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();

  today = dd + "/" + mm + "/" + yyyy;
  return today;
};

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 768,
    color: "rgb(4, 10, 19)",
  },
  creditsCounter: {
    fontSize: "1.5rem",
    display: "inline",
    fontWeight: "500",
  },
  creditsTitle: {
    fontSize: "1rem",
    fontWeight: "500",
  },
  popover: {
    pointerEvents: "none",
  },
  paper: {
    padding: "0.5rem",
    backgroundColor: "rgb(4, 10, 19)",
    color: "#00CCD3",
  },
});

const Credits = ({ profile }) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <Grid container>
      <Grid item xs={4}>
        <div>
          <div className={classes.creditsCounter}> 0</div>
          <small>.00</small>
        </div>
        <div className={classes.creditsTitle}>Total Credits</div>
      </Grid>
      <Grid item xs={4}>
        <div>
          <div className={classes.creditsCounter}>{profile.limit}</div> of
          <div className={classes.creditsCounter}> 60</div>
        </div>
        <div className={classes.creditsTitle}>Free Requests via API</div>

        <small style={{ fontWeight: "200" }}>
          Renews on {nextMonthDate()}{" "}
          <HelpOutlineIcon
            style={{ fontSize: "12px" }}
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
            aria-owns={open ? "mouse-over-popover" : undefined}
          />
        </small>

        <Popover
          id="mouse-over-popover"
          className={classes.popover}
          classes={{
            paper: classes.paper,
          }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
          <Typography>
            The first 60 requests per month to the API are free.
            <br /> Afterwards, additional requests cost 1 credit per image.
          </Typography>
        </Popover>
      </Grid>
      <Grid item xs={4}>
        <Button
          variant="contained"
          onClick={() => alert("Payment system coming soon!")}
          style={{
            backgroundColor: "#0E141D",
            color: "#00CCD3",
            fontSize: "1rem",
            marginTop: "1rem",
          }}
        >
          Get more credits
        </Button>
      </Grid>
    </Grid>
  );
};

export default Credits;
