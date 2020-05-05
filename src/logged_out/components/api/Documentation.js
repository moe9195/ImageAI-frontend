import React from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import Request from "./Request";

const Documentation = () => {
  return (
    <div
      className="container-fluid lg-p-top"
      style={{
        marginBottom: "5rem",
        backgroundColor: "#0E141D",
        height: "1440px",
      }}
    >
      <Request />
    </div>
  );
};

export default Documentation;
