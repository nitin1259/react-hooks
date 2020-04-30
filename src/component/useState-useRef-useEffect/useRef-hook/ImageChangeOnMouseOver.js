import React from "react";

import bwImage from "./../../../assets/images/speakers/bw/Speaker-187.jpg";
import colorImage from "./../../../assets/images/speakers/Speaker-187.jpg";
import ImageToggleOnMouseOver from "./ImageToggleOnMouseOver";

function ImageChangeOnMouseOver() {
  return (
    <div>
      <ImageToggleOnMouseOver
        primaryImage={colorImage}
        secondryImage={bwImage}
      />
      <br />
      <ImageToggleOnMouseOver
        primaryImage={colorImage}
        secondryImage={bwImage}
      />
    </div>
  );
}

export default ImageChangeOnMouseOver;
