import React from "react";
import AutoCompleteAPI from "./AutoComplete-with-api";

function AutoCompletePageAPI() {
  return (
    <div>
      <h2>
        React <span style={{ color: "#ccc" }}>AutoCompete</span> Demo
      </h2>
      Start typing and experience the autocomplete wizardry!
      <br />
      <AutoCompleteAPI />
    </div>
  );
}

export default AutoCompletePageAPI;
