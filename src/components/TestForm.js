// rfc shortcut react based function component

import React, { useState } from "react";

export default function TestForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","Success ")
    // setText("You have Clicked")
  };

  const handleLoClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase","Success ")
    // setText("You have Clicked")
  };

  const handleClearClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared","Success ")
  };

  const Speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    console.log("speak");
  };

  const handleOnChange = (event) => {
    console.log("ON CHANGED");
    setText(event.target.value);
  };

  // const handleSentenceClick = () => {
  //   if (text) {
  //     const words = text.split(' ');
  //     const capitalizedWords = words.map((word) => {
  //       if (word.length > 0) {
  //         const firstLetter = word.charAt(0).toUpperCase();
  //         const restOfWord = word.slice(1).toLowerCase();
  //         return firstLetter + restOfWord;
  //       }
  //       return word;
  //     });
  //     const new text = capitalizedWords.join(' ');
  //     setText(new text);
  //   }
  // };

  const handleSClick = () => {
    setText(text.toLowerCase().replace(/\b\w/g, (s) => s.toUpperCase()));
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <div className="container">
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={text}
              onChange={handleOnChange}
              style={{
                backgroundColor: props.mode === "dark" ? "grey" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
              id="myBox"
              rows="8"
              placeholder="Enter your text"
            ></textarea>
            {/* one curly brace is for js and other one is for an object */}
          </div>
          <button
            className="btn btn-light"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            onClick={handleUpClick}
          >
            Convert To Uppercase
            <i class="fa-solid fa-angles-up fa-fade icon mx-2"></i>
          </button>
          <button
            className="btn btn-light mx-3"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            onClick={handleLoClick}
          >
            Convert To LowerCase
            <i class="fa-solid fa-angles-down fa-fade icon mx-2"></i>
          </button>
          <button
            className="btn btn-light"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            onClick={handleClearClick}
          >
            Clear Test
            <i class="fa-solid fa-eraser fa-fade icon mx-2"></i>
          </button>
          <button
            type="submit"
            className="btn btn-light mx-3"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            onClick={Speak}
          >
            Listen
            <i class="fa-solid fa-volume-high fa-fade mx-2 icon"></i>
          </button>
          {/* <button type="submit" className="btn btn-light " onClick={handleSentenceClick} >
        Capitalized Case
        </button> */}
          <button
            type="submit"
            className="btn btn-light "
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            onClick={handleSClick}
          >
            Capitalized Case
          </button>
        </div>

        <div className="container my-3">
          <h1>Recent Summary</h1>
          {/* <p className="my-3">
            {text.split(" ").length} words, {text.length} characters
          </p> */}
          <p className="my-3">{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
          <p>{0.008 * text.split(" ").length - 1} Minutes read</p>
          <h2>Preview of your text inserted</h2>
          <textarea
            className="form-control"
            name="myBox"
            id="myBox"
            rows="8"
            value={text}
            placeholder="Here you will see the preview of your entered text"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
      </div>
    </>
  );
}
