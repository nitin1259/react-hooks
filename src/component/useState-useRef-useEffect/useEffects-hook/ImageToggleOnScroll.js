import React, { useRef, useEffect, useState } from "react";

function ImageToggleOnScroll({ primaryImg, secondryImg }) {
  const imgRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    setInView(isInView());
    setIsLoading(false);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [isLoading]);

  const isInView = () => {
    if (imgRef.current) {
      const rect = imgRef.current.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }
    return false;
  };

  const scrollHandler = () => {
    setInView(() => {
      return isInView();
    });
  };

  return isLoading ? null : (
    <img
      ref={imgRef}
      alt="Speaker"
      src={inView ? secondryImg : primaryImg}
      width="200"
      height="200"
    />
  );
}

export default ImageToggleOnScroll;
