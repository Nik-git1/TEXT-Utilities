import React, {useState} from 'react'
import PropTypes from 'prop-types'



export default function TextArea(props) {
 
  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText)
    props.showalert("Converted to uppercase!", "success");
}

const handleLoClick = ()=>{ 
    let newText = text.toLowerCase();
    setText(newText)
    props.showalert("Converted to lowercase!", "success");
}

const handleClearClick = ()=>{ 
    let newText = '';
    setText(newText);
    props.showalert("Text Cleared!", "success");
}

const handleCopy = () => {
  navigator.clipboard.writeText(text); 
  props.showalert("Copied to Clipboard!", "success");
}

const handleExtraSpaces = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showalert("Extra spaces removed!", "success");
}


const onChange = (event)=>{
  setText(event.target.value) 
}

  const[text,setText]=useState("");

   return (
<div className='mt-1'>
  <div className="mb-3 my-10" style={{color : props.mode==='dark'?'white':'black'} }  >
    <label htmlFor="MyBox" className="form-label my-10">
      {props.heading}
    </label>
    <textarea className="form-control" id="MyBox " rows="5" style={{backgroundColor: props.mode==='dark'?'grey':'white'} } value={text} onChange={onChange} />
  </div>
  <div className="d-flex justify-content-center">
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
  </div>
  <div className=" my-2 d-flex justify-content-center"  style={{color : props.mode==='dark'?'white':'black'} }>
    <h1  style={{color : props.mode==='dark'?'white':'black'} }>Text Summary</h1>
  </div>
  <div className="d-flex justify-content-center">
  <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
  </div>
</div>
  )
}

TextArea.propTypes = {heading :PropTypes.string.isRequired}
TextArea.defaultProps ={heading: "Enter textarea heading"}