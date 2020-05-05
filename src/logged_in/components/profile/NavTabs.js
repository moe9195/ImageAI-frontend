import React from "react";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Tabs, Tab, Box, Typography } from "@material-ui/core";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import SettingsIcon from "@material-ui/icons/Settings";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 500,
  },
});

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default function IconLabelTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper
      square
      className={classes.root}
      style={{ backgroundColor: "#00CCD3" }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon label tabs example"
        style={{ backgroundColor: "#00CCD3" }}
      >
        <Tab icon={<MonetizationOnIcon />} label="CREDITS" />
        <Tab icon={<VpnKeyIcon />} label="API KEY" />
        <Tab icon={<SettingsIcon />} label="ACCOUNT SETTINGS" />
      </Tabs>
      <TabPanel value={value} index={0}>
        PRETEND IT EXISTS
      </TabPanel>
      <TabPanel value={value} index={1}>
        PRETEND IT EXISTS
      </TabPanel>
      <TabPanel value={value} index={2}>
        PRETEND IT EXISTS
      </TabPanel>
    </Paper>
  );
}
