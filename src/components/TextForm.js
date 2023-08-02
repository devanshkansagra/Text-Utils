import React, { useState } from 'react'

export default function TextForm(prop) {

    // Text area state
    const [text, setText] = useState("")

        
    // Convert to uppercase
    function convertUppercase() {
        let upper = text.toUpperCase();
        setText(upper);
    }

    // Convert to lowercase
    function convertLowercase() {
        let lower = text.toLowerCase();
        setText(lower);
    }

    // Clear text in textarea
    function clearText() {
        setText('');
    }

    // Copy the text
    function copyText() {
        navigator.clipboard.writeText(text);
    }

    // On change event
    function change(event) {
        setText(event.target.value)
    }
    return (
        <>
            <div className='container'>
                <h1>{prop.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
                    <textarea className="form-control" value={text} placeholder='Enter text here' onChange={change} id="exampleFormControlTextarea1" rows="8"></textarea>
                    <button className="btn btn-primary mt-3 dev-btn" onClick={convertUppercase}>Convert to Uppercase</button>
                    <button className="btn btn-primary mt-3 dev-btn" onClick={convertLowercase}>Convert to Lowercase</button>
                    <button className="btn btn-primary mt-3 dev-btn" onClick={clearText}>Clear</button>
                    <button className="btn btn-primary mt-3 dev-btn" onClick={copyText}>Copy</button>
                </div>
            </div>
            <div className="container my-3">
                <h1>Your Words summary</h1>
                <div className="summary">
                    <span className="words">{text.split(' ').length} words</span><span className="chars"> {text.length} characters</span>
                </div>
                <h3 className="my-2">Preview</h3>
                <div className="summary">
                    <span className="text">{text}</span>
                </div>
            </div>
        </>
    );
}
