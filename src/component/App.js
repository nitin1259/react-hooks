import React from "react";
import "./App.css";
// import ImageChangeOnMouseOver from "./useState-useRef-useEffect/useRef-hook/ImageChangeOnMouseOver";
import ImageChangeOnScroll from "./useState-useRef-useEffect/useEffects-hook/ImageChangeOnScroll";
// import InputElement from "./useState-useRef-useEffect/useState-hook/InputElement";

function App() {
  return (
    <div className="App">
      <header>
        <h1>welcome to react hook</h1>

        {/* this is for useState hook 
        <InputElement /> */}

        {/* this is for useRef hook
        <ImageChangeOnMouseOver /> */}

        <ImageChangeOnScroll />
      </header>
    </div>
  );
}

export default App;
