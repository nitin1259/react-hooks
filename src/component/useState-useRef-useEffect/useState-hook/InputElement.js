import React, { useState } from "react";

function InputElement() {
  const [inputText, setInputText] = useState("");
  const [inputHistory, setInputHistory] = useState([]);
  return (
    <div>
      <input
        id="some-text"
        placeholder="Enter some text"
        onChange={(event) => {
          setInputText(event.target.value);
          setInputHistory([...inputHistory, event.target.value]);
        }}
      />
      <br />
      {inputText}
      <hr />
      <ul>
        {inputHistory.map((e) => (
          <li>{e}</li>
        ))}
      </ul>
    </div>
  );
}

export default InputElement;
