import { useState } from "react";
import React from "react";

export default function TextForm(prop) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked " + text);
    let newText = text.toLocaleUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
    console.log(text);
  };

  const [text, setText] = useState("Enter text here");

  return (
    <div>
      <h1>{prop.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
    </div>
  );
}
