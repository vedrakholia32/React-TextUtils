import { useState } from "react";
import React from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked " + text);
    let newText = text.toLocaleUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    console.log("Uppercase was clicked " + text);
    let newText = text.toLocaleLowerCase();
    setText(newText);
  };

  const handleClearText = () => {
    let newText = ''
    setText(newText)
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
    console.log(text);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='light'?'white':'grey', color:props.mode==='dark'?'white':'black'}}  onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"
            
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>

        <button className="btn btn-primary" onClick={handleLoClick}>
          Convert to Lowercase
        </button>

        <button className="btn btn-primary mx-2 my-2" onClick={handleClearText}>
          Clear Text
        </button>
      </div>
      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read </p>
        <h2 className="my-2">Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
