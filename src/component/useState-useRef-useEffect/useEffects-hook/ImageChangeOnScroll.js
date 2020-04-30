import React from "react";
import ImageToggleOnScroll from "./ImageToggleOnScroll";

function ImageChangeOnScroll() {
  return (
    <div>
      {[1124, 187, 823, 1269, 1530].map((speakerid) => {
        return (
          <div id={speakerid}>
            <ImageToggleOnScroll
              primaryImg={require(`./../../../assets/images/speakers/bw/Speaker-${speakerid}.jpg`)}
              secondryImg={require(`./../../../assets/images/speakers/Speaker-${speakerid}.jpg`)}
            />
            <br />
            <br />
          </div>
        );
      })}
    </div>
  );
}

export default ImageChangeOnScroll;
