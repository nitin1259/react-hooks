import React, { useReducer } from "react";
import Child1 from "./Child1";
import Child12 from "./Child12";

export const CountContext = React.createContext();
const initialState = 0;
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
function Parent() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        <p>{count}</p>
        <Child1 />
        <Child12 />
      </CountContext.Provider>
    </div>
  );
}

export default Parent;
