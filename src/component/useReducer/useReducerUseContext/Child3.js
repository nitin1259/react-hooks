import React, { useContext } from "react";
import { CountContext } from "./Parent";

function Child3() {
  const counter = useContext(CountContext);
  return (
    <div>
      <div>
        Counter: {counter.countState}
        <button
          onClick={() => {
            counter.countDispatch("increment");
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            counter.countDispatch("decrement");
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            counter.countDispatch("reset");
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Child3;
