import React, { useState } from "react";
import ReactCompareImage from "react-compare-image";
import { SuperResolutionBefore, SuperResolutionAfter } from "./ImageData";

const BackGroundRemoval = () => {
  return (
    <ReactCompareImage
      leftImageCss={{ width: "350px" }}
      rightImageCss={{ width: "350px" }}
      leftImage={SuperResolutionBefore}
      rightImage={"data:image/jpeg;base64, " + SuperResolutionAfter}
    />
  );
};

export default BackGroundRemoval;
