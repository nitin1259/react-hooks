import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 11,
};

function CounterTwo() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { ...state, firstCounter: state.firstCounter + action.value };
      case "decrement":
        return { ...state, firstCounter: state.firstCounter - action.value };
      case "increment2":
        return { ...state, secondCounter: state.secondCounter + action.value };
      case "decrement2":
        return { ...state, secondCounter: state.secondCounter - action.value };
      case "reset":
        return initialState;
      default:
        return state;
    }
  };
  const [counter, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>
        First Counter: {counter.firstCounter} Second Counter :{" "}
        {counter.secondCounter}
      </div>
      <button
        onClick={() => {
          dispatch({ type: "increment", value: 1 });
        }}
      >
        Increment by 1{" "}
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement", value: 1 });
        }}
      >
        Decrement by 1{" "}
      </button>
      <button
        onClick={() => {
          dispatch({ type: "increment", value: 5 });
        }}
      >
        Increment by 5{" "}
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement", value: 3 });
        }}
      >
        Decrement by 3{" "}
      </button>

      <div>
        <button
          onClick={() => {
            dispatch({ type: "increment2", value: 2 });
          }}
        >
          Increment2 by 2{" "}
        </button>
        <button
          onClick={() => {
            dispatch({ type: "decrement2", value: 4 });
          }}
        >
          Decrement2 by 4{" "}
        </button>
      </div>

      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        Reset{" "}
      </button>
    </div>
  );
}

export default CounterTwo;
