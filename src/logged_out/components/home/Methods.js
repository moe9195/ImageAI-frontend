import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.lightBlue,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[4],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  icon: {
    borderRadius: "50%",
    width: 16,
    height: 16,
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: "#00E9F1",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      backgroundColor: "#FADA5E",
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)",
    },
  },
  checkedIcon: {
    backgroundColor: "#FADA5E",
    "input:hover ~ &": {
      backgroundColor: "#FADA5E",
    },
  },
}));

const StyledRadio = (props) => {
  const classes = useStyles();
  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
};

const Methods = ({ method, handleMethodChange }) => {
  return (
    <FormControl component="fieldset">
      <RadioGroup
        aria-label="Method"
        name="Method"
        value={method}
        style={{ color: "#00E9F1" }}
        onChange={handleMethodChange}
      >
        <FormControlLabel
          value="SuperResolution"
          label="Image Upscaling"
          control={<StyledRadio />}
        />
        <FormControlLabel
          value="Colorize"
          label="Colorization"
          control={<StyledRadio />}
        />
        <FormControlLabel
          value="DeepArt"
          label="Deep Art"
          control={<StyledRadio />}
        />
        <FormControlLabel
          value="RemoveBG"
          label="Background Removal"
          control={<StyledRadio />}
        />
        <FormControlLabel
          value="RestoreImage"
          label="Image Restoration"
          control={<StyledRadio />}
        />
        <FormControlLabel
          value="Deblur"
          label="Deblurring"
          control={<StyledRadio />}
        />
      </RadioGroup>
    </FormControl>
  );
};

export default Methods;
