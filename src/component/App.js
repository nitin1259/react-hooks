import React from "react";
import "./App.css";
import AccordianPage from "./custom-accordin/AccordianPage";
// import CounterOne from "./customhooks/compnt/CounterOne";
// import CounterTwo from "./customhooks/compnt/CounterTwo";
// import UserForm from "./customhooks/compnt/UserForm";
// import DocTitleOne from "./customhooks/compnt/DocTitleOne";
// import ClassTimer from "./useRef/ClassTimer";
// import HookTimer from "./useRef/HookTimer";
// import FocusInput from "./useRef/FocusInput";
// import ParentComponent from "./useCallBack/ParentComponent";
// import Counter from "./useMemo/Counter";
// import DataFetchingOne from "./useReducer/fetchingData/DataFetchingOne";
// import DataFetchingTwo from "./useReducer/fetchingData/DataFetchingTwo";
// import Parent from "./useReducer/useReducerUseContext/Parent";
// import CounterTwo from "./useReducer/complexConter/CounterTwo";
// import CounterThree from "./useReducer/multiReducers/CounterThree";
// import ImageChangeOnMouseOver from "./useState-useRef-useEffect/useRef-hook/ImageChangeOnMouseOver";
// import ImageChangeOnScroll from "./useState-useRef-useEffect/useEffects-hook/ImageChangeOnScroll";
// import Parent from "./useContext/beforeHook/Parent";
// import CounterOne from "./useReducer/baiscConter/CounterOne";
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

        {/* this is for useReducer hooks
        <CounterOne /> 
        <CounterTwo />
        <CounterThree />
        <Parent />
        <DataFetchingOne />
        <DataFetchingTwo />
        */}

        {/* this is for useCallback hooks
        <ParentComponent /> */}

        {/* this is for useMemo hook
        <Counter /> */}

        {/* this is for useRef Hooks 
      <FocusInput />
      <ClassTimer />
        <HookTimer />
      */}

        {/* this is for custom hooks 
        <DocTitleOne />
        <DocTitleTwo />
        <CounterOne />
        <CounterTwo />
        
        <UserForm />
        */}

        <AccordianPage />
      </header>
    </div>
  );
}

export default App;
