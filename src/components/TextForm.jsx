import React, { useState } from 'react'


function TextForm(props) {
    const [text, setText] = useState("");
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleUpClick = () => {
        setText(text.toUpperCase());
        props.showAlert("Converted to UpperCase", "success");
        document.title = ("TextUtils - UpperCase Converted");
        setTimeout(() => {
            document.title = ("TextUtils");
        }, 1400);
    }
    const handleLowClick = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to LowerCase", "success");
        document.title = ("TextUtils - LowerCase Converted");
        setTimeout(() => {
            document.title = ("TextUtils");
        }, 750);
    }
    const handleClearClick = () => {
        setText("");
        props.showAlert("Text Cleared", "success");
        document.title = ("TextUtils - Cleared Text");
        setTimeout(() => {
            document.title = ("TextUtils");
        }, 750);
    }
    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied", "success");
        document.title = ("TextUtils - Copied Text");
        setTimeout(() => {
            document.title = ("TextUtils");
        }, 750);
    }
    const handleExtraSpaceClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed", "success");
        document.title = ("TextUtils - Extra Spaces Removed");
        setTimeout(() => {
            document.title = ("TextUtils");
        }, 750);
    }
    return (
        <div className="container my-3">
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <label htmlFor="myBox" className="form-label">Enter Your Text</label>
                <style>{`#myBox::placeholder {color: ${props.mode === 'dark' ? 'white' : 'black'}}`}</style>
                <textarea className="form-control" id="myBox" rows="10" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black', placeholderColor: props.mode === 'dark' ? 'white' : 'black' }} value={text} onChange={handleOnChange} placeholder='Enter Your Text Here'></textarea>
                <button disabled={text.length === 0} className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button disabled={text.length === 0} className="btn btn-primary my-2 mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
                <button disabled={text.length === 0} className="btn btn-primary my-2 mx-2" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-primary my-2 mx-2" onClick={handleCopyClick}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary my-2 mx-2" onClick={handleExtraSpaceClick}>Remove Extra Space</button>
            </div>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {text.replace(/\s/g, "").length} characters</p>
            <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
        </div>
    )
}

export default TextForm
