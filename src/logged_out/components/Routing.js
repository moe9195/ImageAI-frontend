import React, { memo } from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";
import PropsRoute from "../../shared/components/PropsRoute";
import Home from "./home/Home";
import Documentation from "./api/Documentation";
import Technology from "./technology/Technology";

import Profile from "../../logged_in/components/profile/Profile";
import BackGroundRemoval from "./examples/BackGroundRemoval";
import Classification from "./examples/Classification";
import Colorization from "./examples/Colorization";
import Deblurring from "./examples/Deblurring";
import DeepArt from "./examples/DeepArt";
import SuperResolution from "./examples/SuperResolution";

const Routing = (props) => {
  const { selectHome } = props;
  return (
    <Switch>
      <PropsRoute path="/removebg" component={BackGroundRemoval} />)
      <PropsRoute path="/classification" component={Classification} />)
      <PropsRoute path="/colorize" component={Colorization} />)
      <PropsRoute path="/deblur" component={Deblurring} />)
      <PropsRoute path="/deepart" component={DeepArt} />)
      <PropsRoute path="/superresolution" component={SuperResolution} />)
      <PropsRoute path="/api" component={Documentation} />)
      <PropsRoute path="/profile" component={Profile} />)
      <PropsRoute path="/technology" component={Technology} />)
      <PropsRoute path="/" component={Home} selectHome={selectHome} />)
    </Switch>
  );
};

Routing.propTypes = {
  selectHome: PropTypes.func.isRequired,
};

export default memo(Routing);
