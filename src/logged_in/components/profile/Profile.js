import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import NavTabs from "./NavTabs";

const useStyles = makeStyles(() => ({
  main: {
    textAlign: "center",
    marginBottom: "5rem",
    backgroundColor: "#0E141D",
  },
  title: {
    fontSize: "4rem",
    color: "#00CCD3",
    textAlign: "center",
    fontWeight: "550",
  },
  email: {
    fontSize: "1rem",
    color: "#00CCD3",
    textAlign: "center",
    fontWeight: "450",
  },
}));

const Profile = ({ profile }) => {
  const classes = useStyles();

  if (profile === null) {
    return <Redirect to="/" />;
  }
  return (
    <div className="container-fluid lg-p-top" style={{ textAlign: "center" }}>
      <div className={classes.main}>
        <Typography className={classes.title}>My Account</Typography>
        <Typography className={classes.email}>{profile.email}</Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "3rem 0rem 3rem 0rem",
          }}
        >
          <NavTabs profile={profile} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    profile: state.profile,
  };
};

export default connect(mapStateToProps, null)(Profile);
