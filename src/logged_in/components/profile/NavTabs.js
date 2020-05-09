import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Key from "./Key";
import Credits from "./Credits";
import Settings from "./Settings";
import Payment from "./Payment";

import { Tabs, Tab, Box, Typography, Paper } from "@material-ui/core";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import SettingsIcon from "@material-ui/icons/Settings";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import PaymentIcon from "@material-ui/icons/Payment";

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
        <Box
          style={{
            padding: "4rem 0rem 4rem 0rem",
            borderRadius: "0.5rem 0.5rem 0rem 0rem",
          }}
        >
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

const NavTabs = ({ profile }) => {
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
        centered
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon label tabs example"
        style={{ backgroundColor: "#00CCD3" }}
      >
        <Tab
          icon={<MonetizationOnIcon />}
          label="Credits & Plan"
          style={{ padding: "0px 24px 0px 24px" }}
        />
        <Tab
          icon={<PaymentIcon />}
          label="Payment & Billing"
          style={{ padding: "0px 24px 0px 24px" }}
        />
        <Tab
          icon={<VpnKeyIcon />}
          label="API Key"
          style={{ padding: "0px 24px 0px 24px" }}
        />
        <Tab
          icon={<SettingsIcon />}
          label="ACCOUNT SETTINGS"
          style={{ padding: "0px 24px 0px 24px" }}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Credits profile={profile} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Settings />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Key profile={profile} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Payment />
      </TabPanel>
    </Paper>
  );
};

export default NavTabs;
