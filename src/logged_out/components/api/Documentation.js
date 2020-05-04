import React from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

const Documentation = () => {
  return (
    <div
      className="container-fluid lg-p-top"
      style={{
        marginBottom: "5rem",
        backgroundColor: "#0E141D",
      }}
    >
      <SwaggerUI url="https://raw.githubusercontent.com/moe9195/Capstone-Backend-Fresh/master/docs.yaml" />
    </div>
  );
};

export default Documentation;
