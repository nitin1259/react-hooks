import React, { useRef } from "react";

function ImageToggleOnMouseOver({ primaryImage, secondryImage }) {
  const imgRef = useRef(null);
  return (
    <div>
      <img
        onMouseOver={() => {
          imgRef.current.src = primaryImage;
        }}
        onMouseOut={() => {
          imgRef.current.src = secondryImage;
        }}
        src={secondryImage}
        alt="Speaker"
        ref={imgRef}
      />
    </div>
  );
}

export default ImageToggleOnMouseOver;
