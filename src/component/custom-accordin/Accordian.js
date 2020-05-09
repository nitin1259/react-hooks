import React, { useState, useRef } from "react";
import "./Accordian.css";
import Chevron from "./Chevron";

function Accordian(props) {
  const [activeState, setActiveState] = useState("");
  const [heightState, setHeightState] = useState("0px");
  const [rotate, setRotate] = useState("accordion__icon");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(activeState === "" ? "active" : "");

    setHeightState(
      activeState === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    console.log(content.current.scrollHeight);

    setRotate(
      activeState === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  }

  return (
    <div className="accordion__section">
      <button className={`accordion ${activeState}`} onClick={toggleAccordion}>
        <p className="accordion__title">{props.title}</p>
        <Chevron className={rotate} width={10} fill={"#777"} />
      </button>
      <div
        className="accordion__content"
        ref={content}
        style={{ maxHeight: `${heightState}` }}
      >
        <div
          className="accordion__text"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>
  );
}

export default Accordian;
