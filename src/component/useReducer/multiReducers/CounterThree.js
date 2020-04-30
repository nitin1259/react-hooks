import React, { useReducer } from "react";

const initialState = 0;
function CounterThree() {
  const reducer = (state, action) => {
    switch (action) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      case "reset":
        return initialState;
      default:
        return state;
    }
  };

  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);
  return (
    <div>
      Counter: {count}
      <button
        onClick={() => {
          dispatch("increment");
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch("decrement");
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch("reset");
        }}
      >
        Reset
      </button>
      <div>
        Counter: {countTwo}
        <button
          onClick={() => {
            dispatchTwo("increment");
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatchTwo("decrement");
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            dispatchTwo("reset");
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default CounterThree;
