import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    }
    const handleClearClick = () => {
        let newText = "";
        setText(newText);
    }
    const handleReverseClick = () => {
        let reversedText = text.split('').reverse().join('');
        setText(reversedText);
        props.showAlert("Text Reversed", "success");
    }
    const handleRemoveSpacesClick = () => {
      
        let newText = text.replace(/\s+/g, ' ');
        setText(newText);
        props.showAlert("Extra space remove", "success");
      };
    
      const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard", "success");
      };

      const handleCapitalizeClick = () => {
        let newText = text.replace(/\b\w/g, (match) => match.toUpperCase());
        setText(newText);
      };
    
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('');
  return (
    <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#04243a'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#04243a'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleReverseClick}>Reverse Text</button>
            <button className="btn btn-primary mx-2" onClick={handleRemoveSpacesClick}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCapitalizeClick}>Capitalize First Letter</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#04243a'}}>
            <h2>Your text summary</h2>
            <p>{text.trim() === "" ? "No text entered" : `${text.trim().split(/\s+/).length} word, ${text.trim().length} characters`}</p>
            {/* <p>{text.split(" ").length} word, {text.length} characters</p> */}
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the text box above to  preview it here"}</p>
        </div>
    </>
  )
}
