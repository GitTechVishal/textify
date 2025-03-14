import React, { useState } from "react";
import toggleMode from "../App";
//!Concept of State.....
//? 1st Import React,useState in React library
//? 2nd Create a State Variable Where the text is defautl set "Enter Text Here"
//? 3rd setText : When ever we update any text in the state variable setText will be called
//? that will be in setText.
//? and Where there I will use the text variable it will be automatically updated with
//? the value of the state variable
//! Define temp variables
let tchar = 0;
export default function TextForm(props) {
  //! Adding Functions which work at the time cliking on Buttons.
  //? Convert Text to UpperCase.
  const handleUpClick = () => {
    // console.log("Uppercase was clicked");
    // setText("You have clicked on Uppercase");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };
  //? Convert Text to LowerCase.
  const handleLoClick = () => {
    // console.log("Uppercase was clicked");
    // setText("You have clicked on Uppercase");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };
  //? Convert Text to Clear.
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    tchar = 0;
  };
  //! copy text to clipboard
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    alert("Copied to clipboard");
    props.showAlert("Copied to clipboard", "success");
  };
  //! Remove extra spaces
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    tchar = 0;
    props.showAlert("Extra spaces removed", "success");
  };
  //! Funtion to make first character capital
  const handleCapitalize = () => {
    let newText = text.charAt(0).toUpperCase() + text.slice(1);
    setText(newText);
    tchar = 0;
    props.showAlert("Capitalized", "warning");
  };
  //! Handle font size
  const hendleFontSize = () => {
    let newText = document.getElementById("myBox");
    newText.style.fontSize = "20px";
    props.showAlert("Font Size Increased", "alert");
  };

  //? I will get event on click of the button
  //? Here we Learn How to Handle Events.
  const handleOnChange = (event) => {
    // console.log("On Change");
    //? here setText will be called and change the state variable
    setText(event.target.value);
    tchar = 0.008;
  };

  const [text, setText] = useState("");
  // text = "Enter Text Here"; // Wrong way to change the State Variable
  // Settext("Enter Text Here"); // Correct way to change the State Variable

  return (
    //? <> </> is called JSX Fragment Start this use
    //? to use multiple elements in single line
    <>
      <div>
        {/* <h1>{props.heading}</h1> */}
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">
            <h1>{props.heading}</h1>
          </label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="5"
            style={{
              fontSize: "20px",
              border:
                props.mode === "dark" ? "5px solid gray" : "5px solid black",
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleUpClick}
          style={{ color: "white", border: "2px solid white" }}
        >
          Convert to Uppercase
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleLoClick}
          style={{ color: "white", border: "2px solid white" }}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleClearClick}
          style={{ color: "white", border: "2px solid white" }}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleCopy}
          style={{ color: "white", border: "2px solid white" }}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleExtraSpaces}
          style={{ color: "white", border: "2px solid white" }}
        >
          Remove Extra Spaces
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleCapitalize}
          style={{ color: "white", border: "2px solid white" }}
        >
          First Character Capital
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={hendleFontSize}
          style={{ color: "white", border: "2px solid white" }}
        >
          Font Size
        </button>
      </div>
      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>
          {
            //? text.split("/s+/ ").length use to get entered text word count
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>{tchar * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
      </div>
    </>
  );
}
