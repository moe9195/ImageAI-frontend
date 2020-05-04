import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const Profile = ({ user }) => {
  if (!user) {
    return <Redirect to="/" />;
  }
  return <h1 style={{ color: "white" }}>THIS HAS NOTHING YET</h1>;
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(Profile);
