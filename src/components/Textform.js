import React, { useState } from "react";

export default function Textform(props) {
  const changetoUpper = () => {
    // console.log("Uppercase is clicked on" + text)
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("change to Uppercase", "success");
  };
  const changetoLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("change to lowercase", "success");
  };
  const Clear = () => {
    setText("");
    props.showAlert("Text has been cleared", "success");
  };
  
  const handleOnChange = (event) => {
    setText(event.target.value);
    
  };
  const [text, setText] = useState("");
  // let myStyle={
  //   color: 'white',
  //   backgroundColor : 'black',
  // }

  return (
    <>
      <div className="container" >
        <div className="my-3" style={{color: props.mode === 'light' ?'black':'white'}} >
          <label htmlFor="mybox" className="form-label">
            <h2>{props.heading}</h2>
          </label>
          <textarea
            className="form-control"
            onChange={handleOnChange}
            value={text}
            id="mybox"
            style={{backgroundColor: props.mode === 'light' ?'white':'grey' ,color: props.mode === 'light' ?'black':'white'}}

            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary " onClick={Clear}>
          Clear
        </button>
        <button className="btn btn-primary mx-3" onClick={changetoLower}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-0" onClick={changetoUpper}>
          Convert to uppercase
        </button>
        
       </div>
       <div className="container my-3" style={{color: props.mode === 'light' ?'black':'white'}} >
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length - 1} words and {text.length} characters
        </p>
        <p>{0.008 * (text.split(" ").length - 1)} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
