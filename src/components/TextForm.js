import React, {useState} from 'react'

export default function TextForm(props) {
  const upClick= ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  }
  const lowClick= ()=>{
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleOnChange = (event)=>{
    // console.log("On Change");
    
    setText(event.target.value);
  }

    const [text, setText] = useState('');
    return (
      <>
    <div className = "container">
        <h1>{props.heading} </h1>
     <div className="mb-3">
  {/* <label for="myBox" class="form-label">Example textarea</label> */}
  <textarea className="form-control" value= {text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div> 
<button className="btn btn-primary mx-1"onClick={upClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-1" onClick={lowClick}>Convert to Lowercase</button>
    </div>
    <div className="container my-3"></div>
    <h2>Summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters </p>
    <p>{0.008 * text.split("").length} Minutes read </p>
    <h2>Preview</h2>
    <p>{text}</p>
    </>
  )
}

