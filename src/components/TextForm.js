import React, { useState } from 'react'

export default function TextForm(props) {

    // Text area state
    const [text, setText] = useState("")

    let preview = text;
    if (text === "") {
        preview = "Nothing to preview";
    }
    else {
        preview = text;
    }
    // Convert to uppercase
    function convertUppercase() {
        let upper = text.toUpperCase();
        props.showAlert(" Converted to Uppercase!", "success");
        setText(upper);
    }

    // Convert to lowercase
    function convertLowercase() {
        let lower = text.toLowerCase();
        props.showAlert(" Converted to Lowercase!", "success");
        setText(lower);
    }

    // Clear text in textarea
    function clearText() {
        props.showAlert(" Text Cleared!", "success");
        setText('');
    }

    // Copy the text
    function copyText() {
        navigator.clipboard.writeText(text);
        props.showAlert(" Text Copied!", "success");
    }

    // Remove White spaces
    let newText = text.split(/[ ]+/)
    function removeSpaces() {
        setText(newText.join(""))
        props.showAlert(" Whitespaces are removed!","success");
    }

    // On change event
    function change(event) {
        setText(event.target.value)
    }
    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
                    <textarea className="form-control" value={text} placeholder='Enter text here' onChange={change} id="exampleFormControlTextarea1" rows="8"></textarea>
                    <button className="btn btn-primary mt-3 dev-btn" onClick={convertUppercase} disabled={text.length === 0}>Convert to Uppercase</button>
                    <button className="btn btn-primary mt-3 dev-btn" onClick={convertLowercase} disabled={text.length === 0}>Convert to Lowercase</button>
                    <button className="btn btn-primary mt-3 dev-btn" onClick={clearText} disabled={text.length === 0}>Clear</button>
                    <button className="btn btn-primary mt-3 dev-btn" onClick={copyText} disabled={text.length === 0}>Copy</button>
                    <button className="btn btn-primary mt-3 dev-btn" onClick={removeSpaces} disabled={text.length === 0}>Remove White Spaces</button>
                </div>
            </div>
            <div className="container my-3">
                <h1>Your Words summary</h1>
                <div className="summary">
                    <span className="words">{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words</span><span className="chars"> {text.length} characters</span>
                </div>
                <h3 className="my-2">Preview</h3>
                <div className="summary">
                    <span className="text">{preview}</span>
                </div>
            </div>
        </>
    );
}
