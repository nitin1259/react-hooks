import React from "react";
import "./App.css";
// import ImageChangeOnMouseOver from "./useState-useRef-useEffect/useRef-hook/ImageChangeOnMouseOver";
import ImageChangeOnScroll from "./useState-useRef-useEffect/useEffects-hook/ImageChangeOnScroll";
import Parent from "./useContext/beforeHook/Parent";
import CounterOne from "./useReducer/baiscConter/CounterOne";
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

        {/* this is for useEffects hook
        <ImageChangeOnScroll /> */}

        {/*  this id for useContext hook
        <Parent /> */}

        <CounterOne />
      </header>
    </div>
  );
}

export default App;
