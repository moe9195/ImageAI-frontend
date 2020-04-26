import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import HeadSection from "./HeadSection";
import FeatureSection from "./FeatureSection";
import PricingSection from "./PricingSection";
import APISection from "./APISection";
import FAQ from "./FAQ";

const Home = (props) => {
  const { selectHome } = props;
  useEffect(() => {
    selectHome();
  }, [selectHome]);
  return (
    <Fragment>
      <HeadSection />
      <FeatureSection />
      <PricingSection />
      <APISection />
      <FAQ />
    </Fragment>
  );
};

Home.propTypes = {
  selectHome: PropTypes.func.isRequired,
};

export default Home;
