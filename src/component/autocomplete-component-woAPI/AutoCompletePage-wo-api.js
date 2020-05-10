import React from "react";
import AutoComplete from "./AutoComplete-wo-api";

function AutoCompletePage() {
  return (
    <div>
      <h2>
        React <span style={{ color: "#ccc" }}>AutoCompete</span> Demo
      </h2>
      Start typing and experience the autocomplete wizardry!
      <br />
      <AutoComplete
        suggestions={[
          "White",
          "Black",
          "Green",
          "Blue",
          "Yellow",
          "Red",
          "Alligator",
          "Bask",
          "Crocodilian",
          "Death Roll",
          "Eggs",
          "Jaws",
          "Reptile",
          "Solitary",
          "Tail",
          "Wetlands",
        ]}
      />
    </div>
  );
}

export default AutoCompletePage;
